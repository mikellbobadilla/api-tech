import { Sequelize } from 'sequelize'
import {
  MYSQL_DATABASE,
  MYSQL_DATABASE_TEST,
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_USER,
  NODE_ENV
} from './env.js'

const database = NODE_ENV === 'test'
  ? MYSQL_DATABASE_TEST
  : MYSQL_DATABASE


const options = {
  host: MYSQL_HOST,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: database,
  dialect: 'mysql'
}

const sequelize = new Sequelize({ ...options, logging: false })
export default sequelize