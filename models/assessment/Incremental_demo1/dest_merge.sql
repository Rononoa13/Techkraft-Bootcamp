{{ config(
  materialized='incremental',
  schema='TK_SCHEMA',
  incremental_strategy='merge',
  unique_key='brand'
) }}


SELECT * 
FROM {{ source('sourcename', 'SOURCE_TB') }} 
WHERE 
order_date >= (select max(order_date) from {{ source('sourcename', 'SOURCE_TB') }})