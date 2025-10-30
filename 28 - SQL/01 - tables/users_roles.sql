CREATE TABLE sql_course.users_roles (
	user_id INT UNSIGNED NOT NULL,
	role_id INT UNSIGNED NOT NULL,
	CONSTRAINT users_roles_pk PRIMARY KEY (user_id,role_id),
	CONSTRAINT users_roles_users_FK FOREIGN KEY (user_id) REFERENCES sql_course.users(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT users_roles_roles_FK FOREIGN KEY (role_id) REFERENCES sql_course.roles(id) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE sql_course.users_roles ADD created_at DATETIME DEFAULT NOW() NULL;
ALTER TABLE sql_course.users_roles ADD updated_at DATETIME DEFAULT NOW() ON UPDATE NOW() NULL;

