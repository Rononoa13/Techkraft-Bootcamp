WITH source_sales AS (
    SELECT * FROM {{ source('sourcename', 'MY_FIRST_DBT_MODEL') }}
)

SELECT * FROM source_sales