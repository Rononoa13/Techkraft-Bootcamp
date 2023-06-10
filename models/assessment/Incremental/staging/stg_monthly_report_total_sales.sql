WITH monthly_report as (
    select
        date_trunc('month', order_date) as month,
        product_name,
        sum(order_amount) as total_sales
    from filtered_data
    group by date_trunc('month', order_date), product_name
)

SELECT * FROM monthly_report