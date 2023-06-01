WITH source_sales AS (
    SELECT * FROM {{ source('sourcename', 'SALES_DATA_TABLE') }}
)

SELECT * FROM source_sales