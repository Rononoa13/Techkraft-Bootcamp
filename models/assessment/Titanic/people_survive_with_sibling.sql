-- 3.
SELECT COUNT(*) AS people_survive_with_sibling FROM (SELECT * FROM titanic_table
WHERE SIBSP = 1)

WHERE SURVIVED = 1