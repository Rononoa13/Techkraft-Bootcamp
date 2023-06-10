{{ config(
  materialized='incremental',
  schema='TK_SCHEMA',
  incremental_strategy='delete+insert',
  unique_key='id',
  partition_by='id'
) }}


SELECT * 
FROM {{ source('sourcename', 'SOURCE_TB') }} 
WHERE 
order_date >= (select max(order_date) from {{ source('sourcename', 'SOURCE_TB') }})