CREATE TABLE sql_course.profiles (
	id INT UNSIGNED auto_increment NOT NULL,
	bio TEXT NULL,
	description TEXT NULL,
	user_id INT UNSIGNED NULL,
	CONSTRAINT profiles_pk PRIMARY KEY (id),
	CONSTRAINT profiles_unique UNIQUE KEY (user_id),
	CONSTRAINT profiles_users_FK FOREIGN KEY (user_id) REFERENCES sql_course.users(id) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE sql_course.profiles ADD created_at DATETIME DEFAULT NOW() NULL;
ALTER TABLE sql_course.profiles ADD updated_at DATETIME DEFAULT NOW() ON UPDATE NOW() NULL;
