CREATE TABLE IF NOT EXISTS `db`.`USERS` (

    ID INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    EMAIL VARCHAR(255) NOT NULL,
    PWD VARCHAR(255) NOT NULL,
    CONFIRMED BOOLEAN DEFAULT false
);

INSERT INTO `db`.`USERS` (EMAIL, PWD, CONFIRMED) VALUES ('john@gmail.com', '$2y$10$.vGA1O9wmRjrwAVXD98HNOgsNpDczlqm3Jq7KnEd1rVAGv3Fykk1a', true);
INSERT INTO `db`.`USERS` (EMAIL, PWD, CONFIRMED) VALUES ('benjamin@gmail.com', '$2y$10$.vGA1O9wmRjrwAVXD98HNOgsNpDczlqm3Jq7KnEd1rVAGv3Fykk1a', false);