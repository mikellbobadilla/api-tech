import { afterEach } from 'mocha'
import sequelize from '../config/sequelize.js'
import server from '../index.js'

beforeEach(async () => {
  await sequelize.query('DELETE FROM users')
})

afterEach(async () => {
  server.close()
})