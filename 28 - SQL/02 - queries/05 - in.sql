-- In selects where the value is in the array of elements
SELECT * FROM users;

SELECT * FROM users 
WHERE id=110 OR id=115;

SELECT * FROM users 
WHERE id IN (10,20,40,50,60)
AND first_name IN ("Wayne", "Lacy");
