-- Active: 1673102165784@@127.0.0.1@3306@tech

-- Insert USER

INSERT INTO
    `users` (
        `name`,
        `last_name`,
        `age`,
        `username`,
        `email`,
        `password`,
        `charge`,
        `role`
    )
VALUES (
        'sting',
        'bobadilla',
        20,
        'noa',
        'bobadilla@gmail.com',
        'Holamundo100',
        'developer',
        'ADMIN'
    ), (
        'mikell',
        'bobadilla',
        20,
        'mikell',
        'mikell@gmail.com',
        'Holamundo100',
        'developer',
        'USER'
    );