SELECT u.id AS uid,u.first_name, p.id as pid, p.bio
FROM users AS u, profiles AS p
WHERE u.id = p.user_id;