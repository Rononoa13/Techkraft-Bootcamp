-- 1. How many people survive and how many people dead
SELECT COUNT(*) as people_deaths
FROM titanic_table
WHERE SURVIVED = 0