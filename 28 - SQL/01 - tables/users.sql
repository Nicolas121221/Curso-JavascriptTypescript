CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email` (`email`),
  UNIQUE KEY `users_password_hash` (`password_hash`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE sql_course.users ADD created_at DATETIME DEFAULT NOW() NULL;
ALTER TABLE sql_course.users ADD updated_at DATETIME DEFAULT NOW() ON UPDATE NOW() NULL;
