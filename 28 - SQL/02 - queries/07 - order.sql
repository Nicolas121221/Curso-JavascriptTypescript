SELECT id, first_name, email AS uemail
FROM users
WHERE id BETWEEN 100 AND 150
ORDER BY first_name DESC, id ASC;