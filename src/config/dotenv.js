import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
  port: process.env.APP_PORT,
  // Database
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT,
  // JWT
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: process.env.JWT_EXPIRATION,
}