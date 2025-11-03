-- Between selects a value between a range
SELECT * FROM users
WHERE
	created_at >= "2020-11-24 16:46:18"
AND 
	created_at <= "2021-03-23 19:31:26"
	
SELECT * FROM users
WHERE
	created_at 
BETWEEN 
	"2021-01-01 00:00:00" 
AND 
	"2021-03-31 23:59:59"
AND 
id BETWEEN 100 AND 140;