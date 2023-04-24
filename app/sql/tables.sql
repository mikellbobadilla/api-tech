CREATE TABLE
    `users` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(40) NOT NULL,
        `last_name` VARCHAR(40) NOT NULL,
        `age` INTEGER(100) NOT NULL,
        `username` VARCHAR(40) NOT NULL UNIQUE,
        `email` VARCHAR(255) NOT NULL UNIQUE,
        `password` VARCHAR(255) NOT NULL,
        `charge` VARCHAR(40),
        `role` VARCHAR(10) NOT NULL DEFAULT 'USER',
        PRIMARY KEY (`id`)
    ) DEFAULT CHARSET = utf8;

CREATE TABLE
    `posts`(
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `id_user` INTEGER NOT NULL,
        `title` VARCHAR(255) NOT NULL,
        `content` TEXT NOT NULL,
        `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`id_user`) REFERENCES `users`(`id`)
    ) DEFAULT CHARSET = utf8;

CREATE TABLE
    `comments`(
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `id_user` INTEGER NOT NULL,
        `id_post` INTEGER NOT NULL,
        `content` TEXT NOT NULL,
        `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`id_user`) REFERENCES `users`(`id`),
        FOREIGN KEY (`id_post`) REFERENCES `posts`(`id`)
    ) DEFAULT CHARSET = utf8;

CREATE TABLE
    `likes`(
        `id_user` INTEGER NOT NULL,
        `id_post` INTEGER NOT NULL,
        PRIMARY KEY (`id_user`, `id_post`),
        FOREIGN KEY (`id_user`) REFERENCES `users`(`id`),
        FOREIGN KEY (`id_post`) REFERENCES `posts`(`id`)
    ) DEFAULT CHARSET = utf8;