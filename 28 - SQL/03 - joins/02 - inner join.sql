-- inner join
SELECT u.id AS uid, p.id AS pid,
p.bio, u.first_name
FROM users u, profiles p
WHERE u.id = p.user_id;

SELECT u.id uid, p.id pid,
p.bio, u.first_name
FROM users u
INNER JOIN profiles p 
ON u.id = p.user_id
WHERE u.first_name LIKE "%a"
ORDER BY u.first_name ASC
LIMIT 5;