import { afterEach } from 'mocha'
import sequelize from '../config/sequelize.js'
import server from '../index.js'
import { userService } from '../use-cases/index.js'

const users = [
  {
    name: 'pepito',
    last_name: 'obrador',
    age: 50,
    username: 'pepe',
    email: 'obrador@gmail.com',
    password: 'HolaMundo100?',
    charge: 'Presidente',
    role: 'USER'
  },
  {
    name: 'sofia',
    last_name: 'cañuelas',
    age: 25,
    username: 'sofi',
    email: 'sofi@gmail.com',
    password: 'HolaMundo100?',
    charge: 'Presidente',
    role: 'USER'
  },
]

beforeEach(async () => {
  await sequelize.query('DELETE FROM users')
  users.forEach(async user => {
    await userService.create(user)
  })
})

afterEach(async () => {
  server.close()
})