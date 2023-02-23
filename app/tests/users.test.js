'use strict'
import chai, { expect, assert } from 'chai'
import chaiHttp from 'chai-http'
import server from '../index.js'
chai.use(chaiHttp)

const user = {
  name: 'veronica',
  last_name: 'riciotti',
  age: 30,
  username: 'vero',
  email: 'vero@gmail.com',
  password: 'HolaMundo100?',
  charge: 'Developer',
  role: 'USER'
}

let token = ''

describe('Normal steps to use authentication and create, delete, update and get users', () => {
  // Step 1 "create the user"
  it('Should pass these tests', done => {
    chai.request(server)
      .post('/api/users')
      .send({ user })
      .end((_, res) => {
        expect(res)
          .to.have.status(201)
          .to.have.header('content-type', /application\/json/)
        assert.equal(res.body.status, 'CREATED')

        // Step 2 "Authenticate with this user"
        chai.request(server)
          .post('/api/auth')
          .send({ identity: user.username, password: user.password })
          .end((_, res) => {
            token = res.body.token
            expect(res)
              .to.have.status(200)
              .to.have.header('content-type', /application\/json/)
            assert.equal(res.body.status, 'OK')

            // Step 3 "Get some resouces with the token"
            chai.request(server)
              .get('/api/users')
              .set('Authorization', `Bearer ${token}`)
              .end((_, res) => {
                expect(res)
                  .to.have.status(200)
                  .to.have.header('content-type', /application\/json/)

                // Step 4 trying to update an user
                chai.request(server)
                  .put(`/api/users/${user.username}`)
                  .set('Authorization', `Bearer ${token}`)
                  .send({ user })
                  .end((_, res) => {
                    expect(res)
                      .to.have.status(200)
                      .to.have.header('content-type', /application\/json/)

                    chai.request(server)
                      .delete(`/api/users/${user.email}`)
                      .set('Authorization', `Bearer ${token}`)
                      .end((_, res) => {
                        expect(res)
                          .to.have.status(200)
                          .to.have.header('content-type', /application\/json/)

                        done()
                      })

                  })
              })

          })
      })
  })
})

describe('Steps that should to fail when trying delete and update users', () => {
  it('Testing data sending', done => {
    chai.request(server)
      .post('/api/users')
      .send({ user })
      .end((_, res) => {
        expect(res)
          .to.have.status(201)
          .to.have.header('content-type', /application\/json/)
        assert.equal(res.body.status, 'CREATED')

        // Step 2 "Authenticate with this user"
        chai.request(server)
          .post('/api/auth')
          .send({ identity: user.username, password: user.password })
          .end((_, res) => {
            token = res.body.token
            expect(res)
              .to.have.status(200)
              .to.have.header('content-type', /application\/json/)
            assert.equal(res.body.status, 'OK')

            user.email = 'algo@gmail'

            chai.request(server)
              .put(`/api/users/${user.email}`)
              .send({ user })
              .set('Authorization', `Bearer ${token}`)
              .end((_, res) => {
                expect(res)
                  .to.have.status(400)
                assert.equal(res.body.status, 'BAD REQUEST')

                chai.request(server)
                  .put('/api/users/sofi')
                  .set('Authorization', `Bearer ${token}`)
                  .end((_, res) => {
                    expect(res)
                      .to.have.status(400)

                    chai.request(server)
                      .delete('/api/users/sofi')
                      .set('Authorization', `Bearer ${token}`)
                      .end((_, res) => {
                        expect(res)
                          .to.have.status(400)

                        done()
                      })
                  })
              })
          })
      })
  })
})