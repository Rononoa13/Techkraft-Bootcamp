-- models/incremental/append_customers.sql

{{ config(
    materialized = 'incremental',
    schema = 'TK_SCHEMA',
    incremental_strategy = 'append'
) }}

SELECT * 
FROM {{ source('sourcename', 'SOURCE_TB') }} 
WHERE 
order_date >= (select max(order_date) from {{ source('sourcename', 'SOURCE_TB') }})