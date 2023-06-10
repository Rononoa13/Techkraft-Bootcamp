
{{config(
    materialized = 'incremental',
    incremental_strategy = 'Append'

)}}
-- Transform the data
with filtered_data as (
    SELECT *
    FROM {{ source('sourcename', 'SALES_DATA_TABLE') }}
    where order_date >= date_trunc('month', current_date) -- Filter data for the current month
),
monthly_report as (
    select
        date_trunc('month', order_date) as month,
        product_name,
        sum(order_amount) as total_sales
    from filtered_data
    group by date_trunc('month', order_date), product_name
)

-- Append the new monthly sales data to the existing report
insert into {{ ref('monthly_sales') }}
select *
from monthly_report