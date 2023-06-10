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
monthly_report as (
    select
        date_trunc('month', order_date) as month,
        product_name,
        sum(order_amount) as total_sales
    from filtered_data
    group by date_trunc('month', order_date), product_name
),
top_product as (
    select
        month,
        product_name,
        total_sales,
        row_number() over (partition by month order by total_sales desc) as rank
    from monthly_report
)
-- Get the product with the highest sales in each month
select *
from top_product
where rank = 1
