CREATE TABLE sql_course.roles (
	id INT UNSIGNED auto_increment NOT NULL,
	name varchar(100) NOT NULL,
	CONSTRAINT roles_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE sql_course.roles ADD created_at DATETIME DEFAULT NOW() NULL;
ALTER TABLE sql_course.roles ADD updated_at DATETIME DEFAULT NOW() ON UPDATE NOW() NULL;
