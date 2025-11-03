-- limit - limits the quantity of values
-- offset - changes the initial position limit
SELECT id, first_name, email AS uemail
FROM users
WHERE id BETWEEN 100 AND 150
ORDER BY id ASC
LIMIT 10 OFFSET 10;

SELECT id, first_name, email AS uemail
FROM users
WHERE id BETWEEN 100 AND 150
ORDER BY id ASC
LIMIT 10,3;