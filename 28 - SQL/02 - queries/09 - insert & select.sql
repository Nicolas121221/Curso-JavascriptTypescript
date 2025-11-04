-- insert select
INSERT INTO profiles(bio,description, user_id)
SELECT concat("bio of ", first_name), concat("description of ", first_name), id FROM users;
