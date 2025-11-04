-- left join
SELECT u.id uid, p.id pid,
p.bio, u.first_name
FROM users u
LEFT JOIN profiles p 
ON u.id = p.user_id
ORDER BY p.bio ASC