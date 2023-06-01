
-- Transform the data
with filtered_data as (
    SELECT *
    FROM {{ source('sourcename', 'SALES_DATA_TABLE') }}
    where order_date <= date_trunc('month', current_date) -- Filter data for the current month
),

monthly_report as (
    select
        date_trunc('month', order_date) as month,
        count(distinct order_id) as total_orders,
        count(distinct customer_id) as total_customers,
        sum(order_amount) as total_sales,
        sum(order_amount) / count(distinct customer_id) as avg_order_amount_per_customer
    from filtered_data
    group by date_trunc('month', order_date)
)

-- Create the monthly sales report
select *
from monthly_report