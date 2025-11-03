-- where filters a column

-- operators -> = < <= > >= <> !=
-- logical operators -> AND OR

SELECT * FROM users WHERE id = 1;
SELECT * FROM users WHERE first_name = "Nícolas";
SELECT * FROM users WHERE id < 10;

SELECT * FROM users WHERE created_at >= "2025-11-03 01:30:17";
SELECT * FROM users WHERE created_at < "2025-11-03 01:30:17" OR first_name="Eduardo";