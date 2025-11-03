USE SQL_course;

SHOW tables;

DESCRIBE users;

INSERT INTO users(first_name, last_name, email, password_hash) VALUES
("Nícolas", "121221", "nicolas@email.com", "1_hash"),
("Eduardo", "Silva", "eduardo@email.com", "2_hash"),
("Maria", "Moreira", "maria@email.com", "3_hash"),
("Joana", "A", "1@email.com", "4_hash"),
("Helena", "B.", "2@email.com", "5_hash"),
("Rosana", "C.", "3@email.com", "6_hash");