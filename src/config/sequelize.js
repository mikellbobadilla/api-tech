import { Sequelize } from 'sequelize'
import { config } from './dotenv.js'

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false,
})