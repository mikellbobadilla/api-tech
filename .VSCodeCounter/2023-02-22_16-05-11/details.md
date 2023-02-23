# Details

Date : 2023-02-22 16:05:11

Directory c:\\Users\\sting\\Desktop\\dev\\proyects\\api-tech

Total : 52 files,  6727 codes, 173 comments, 293 blanks, all 7193 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [README.md](/README.md) | Markdown | 33 | 0 | 16 | 49 |
| [app/config/env.js](/app/config/env.js) | JavaScript | 13 | 0 | 1 | 14 |
| [app/config/express.js](/app/config/express.js) | JavaScript | 16 | 0 | 2 | 18 |
| [app/config/sequelize.js](/app/config/sequelize.js) | JavaScript | 21 | 0 | 4 | 25 |
| [app/config/server.js](/app/config/server.js) | JavaScript | 4 | 0 | 0 | 4 |
| [app/controllers/AuthController.js](/app/controllers/AuthController.js) | JavaScript | 25 | 0 | 4 | 29 |
| [app/controllers/UserController.js](/app/controllers/UserController.js) | JavaScript | 122 | 1 | 17 | 140 |
| [app/controllers/index.js](/app/controllers/index.js) | JavaScript | 9 | 0 | 1 | 10 |
| [app/data-access/CommentDb.js](/app/data-access/CommentDb.js) | JavaScript | 0 | 0 | 1 | 1 |
| [app/data-access/UserDb.js](/app/data-access/UserDb.js) | JavaScript | 53 | 0 | 8 | 61 |
| [app/data-access/index.js](/app/data-access/index.js) | JavaScript | 6 | 0 | 2 | 8 |
| [app/errors/AuthExeption.js](/app/errors/AuthExeption.js) | JavaScript | 11 | 0 | 3 | 14 |
| [app/errors/UsersExeption.js](/app/errors/UsersExeption.js) | JavaScript | 11 | 0 | 1 | 12 |
| [app/errors/index.js](/app/errors/index.js) | JavaScript | 6 | 0 | 0 | 6 |
| [app/helpers/index.js](/app/helpers/index.js) | JavaScript | 4 | 0 | 1 | 5 |
| [app/helpers/validateEmail.js](/app/helpers/validateEmail.js) | JavaScript | 5 | 0 | 1 | 6 |
| [app/index.js](/app/index.js) | JavaScript | 18 | 0 | 4 | 22 |
| [app/jwt/index.js](/app/jwt/index.js) | JavaScript | 5 | 0 | 2 | 7 |
| [app/jwt/jwt.js](/app/jwt/jwt.js) | JavaScript | 23 | 6 | 4 | 33 |
| [app/middlewares/index.js](/app/middlewares/index.js) | JavaScript | 7 | 0 | 2 | 9 |
| [app/middlewares/middleware.js](/app/middlewares/middleware.js) | JavaScript | 56 | 0 | 15 | 71 |
| [app/models/Comment.js](/app/models/Comment.js) | JavaScript | 49 | 1 | 5 | 55 |
| [app/models/Like.js](/app/models/Like.js) | JavaScript | 35 | 1 | 5 | 41 |
| [app/models/Post.js](/app/models/Post.js) | JavaScript | 42 | 1 | 5 | 48 |
| [app/models/User.js](/app/models/User.js) | JavaScript | 116 | 0 | 3 | 119 |
| [app/models/index.js](/app/models/index.js) | JavaScript | 10 | 0 | 1 | 11 |
| [app/querys/drops-tables.sql](/app/querys/drops-tables.sql) | SQL | 1 | 1 | 1 | 3 |
| [app/querys/inserts.sql](/app/querys/inserts.sql) | SQL | 30 | 2 | 2 | 34 |
| [app/querys/tables.sql](/app/querys/tables.sql) | SQL | 42 | 0 | 3 | 45 |
| [app/routes/auth.routes.js](/app/routes/auth.routes.js) | JavaScript | 7 | 0 | 5 | 12 |
| [app/routes/index.js](/app/routes/index.js) | JavaScript | 9 | 0 | 2 | 11 |
| [app/routes/user.routes.js](/app/routes/user.routes.js) | JavaScript | 15 | 8 | 2 | 25 |
| [app/tests/setup.js](/app/tests/setup.js) | JavaScript | 9 | 0 | 2 | 11 |
| [app/tests/users.test.js](/app/tests/users.test.js) | JavaScript | 69 | 95 | 23 | 187 |
| [app/use-cases/AuthService.js](/app/use-cases/AuthService.js) | JavaScript | 32 | 18 | 15 | 65 |
| [app/use-cases/UserService.js](/app/use-cases/UserService.js) | JavaScript | 43 | 0 | 17 | 60 |
| [app/use-cases/index.js](/app/use-cases/index.js) | JavaScript | 11 | 0 | 1 | 12 |
| [package-lock.json](/package-lock.json) | JSON | 5,292 | 0 | 1 | 5,293 |
| [package.json](/package.json) | JSON | 33 | 9 | 0 | 42 |
| [src/api/auth/controller/authController.js](/src/api/auth/controller/authController.js) | JavaScript | 48 | 0 | 14 | 62 |
| [src/api/auth/routes/router.js](/src/api/auth/routes/router.js) | JavaScript | 8 | 6 | 6 | 20 |
| [src/api/auth/service/authService.js](/src/api/auth/service/authService.js) | JavaScript | 47 | 5 | 17 | 69 |
| [src/api/post/controller/postController.js](/src/api/post/controller/postController.js) | JavaScript | 57 | 0 | 12 | 69 |
| [src/api/post/repository/postRepository.js](/src/api/post/repository/postRepository.js) | JavaScript | 46 | 0 | 9 | 55 |
| [src/api/post/routes/router.js](/src/api/post/routes/router.js) | JavaScript | 3 | 8 | 2 | 13 |
| [src/api/post/service/postService.js](/src/api/post/service/postService.js) | JavaScript | 25 | 0 | 7 | 32 |
| [src/api/user/controller/userController.js](/src/api/user/controller/userController.js) | JavaScript | 69 | 3 | 16 | 88 |
| [src/api/user/middleware/authorize.js](/src/api/user/middleware/authorize.js) | JavaScript | 16 | 0 | 1 | 17 |
| [src/api/user/repository/userRepository.js](/src/api/user/repository/userRepository.js) | JavaScript | 52 | 0 | 7 | 59 |
| [src/api/user/routes/router.js](/src/api/user/routes/router.js) | JavaScript | 11 | 8 | 7 | 26 |
| [src/api/user/service/userService.js](/src/api/user/service/userService.js) | JavaScript | 30 | 0 | 10 | 40 |
| [src/middlewares/checkAuth.js](/src/middlewares/checkAuth.js) | JavaScript | 22 | 0 | 3 | 25 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)