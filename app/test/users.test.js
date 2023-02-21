import supertest from 'supertest'
import server from '../index.js'
import sequelize from '../config/sequelize.js'
const api = supertest(server)

const user = {
  name: 'sting',
  last_name: 'bobadilla',
  age: 20,
  username: 'noa',
  email: 'mikell@gmail.com',
  password: 'HolaMundo100?',
  charge: 'Developer',
  role: 'ADMIN'
}




test('users are returned as json', async () => {
  const res = await api
    .get('/api/users')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})


test('create new user and return it self', async () => {
  const res = await api
    .post('/api/users')
    .send(user)
    .expect(201)
    .expect('Content-Type', /application\/json/)
})

beforeAll(async () => {
  await sequelize.query('DELETE FROM users;')
})

afterAll(() => {
  server.close()
})