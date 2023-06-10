-- 4. .Remove the NAN data from cabin and display updated list
select * from titanic_table
where cabin is not null