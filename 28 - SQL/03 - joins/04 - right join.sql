-- right join
SELECT u.id uid, p.id pid,
p.bio, u.first_name
FROM users u
RIGHT JOIN profiles p 
ON u.id = p.user_id
ORDER BY p.bio ASC