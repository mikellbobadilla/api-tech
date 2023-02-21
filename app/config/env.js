import * as dotenv from 'dotenv'
dotenv.config()

export const {
  PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_DATABASE_TEST,
  NODE_ENV,
  JWT_SECRET,
  JWT_EXPIRATION
} = process.env