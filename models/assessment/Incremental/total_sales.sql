{{config(
    materialized = 'incremental',
    incremental_strategy = 'insert',
    unique_key = 'order_date'

)}}

-- Transform the data
with filtered_data as (
    SELECT *
    FROM {{ source('sourcename', 'SALES_DATA_TABLE') }}
    where order_date <= date_trunc('month', current_date) -- Filter data for the current month
),

existing_report as (
    select *
    from {{ ref('stg_monthly_report_total_sales') }}
),
updated_report as (
    select *
    from monthly_report
    where not exists (
        select 1
        from existing_report
        where monthly_report.month = existing_report.month
        and monthly_report.product_name = existing_report.product_name
        and monthly_report.total_sales = existing_report.total_sales
    )
),
final_report as (
    select *
    from existing_report
    union all
    select *
    from updated_report
)
-- Get the product with the highest sales in each month (incremental approach)
select *
from final_report
where total_sales = (
    select max(total_sales)
    from final_report
    where month = final_report.month
)