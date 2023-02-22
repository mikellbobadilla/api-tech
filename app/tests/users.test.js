'use strict'
import chai, { expect, assert } from 'chai'
import chaiHttp from 'chai-http'
import server from '../index.js'
chai.use(chaiHttp)

const user = {
  name: 'sting',
  last_name: 'bobadilla',
  age: 20,
  username: 'noa',
  email: 'mikell@gmail.com',
  password: 'HolaMundo100?',
  charge: 'Developer',
  role: 'USER'
}

describe('Testing Endpoint Users', () => {

  it('Should return all users', done => {
    chai.request(server)
      .get('/api/users')
      .end((err, res) => {
        expect(res)
          .to.have.header('content-type', /application\/json/)
          .to.have.status(200)
        assert.equal(res.body.data.length, 0)
        assert.equal(res.body.status, 'OK')
        done()
      })
  })

  it('Should return 201 to create new user and check the persistence', done => {
    chai.request(server)
      .post('/api/users')
      .send(user)
      .end((err, res) => {
        if (err) {
          console.error(`${err.name}: ${err.message}`)
        } else {
          assert.equal(res.status, 201)
          assert.equal(res.body.status, 'CREATED')
          chai.request(server)
            .get('/api/users')
            .end((err, res) => {
              expect(res)
                .to.have.header('content-type', /application\/json/)
                .to.have.status(200)
              assert.equal(res.body.data.length, 1)
              /* Get user by username or email */
              chai.request(server)
                .get('/api/users/mikell@gmail.com')
                .end((err, res) => {
                  if (err) {
                    console.error(`${err.name}: ${err.message}`)
                  } else {
                    expect(res)
                      .to.have.status(200)
                      .to.have.header('content-type', /application\/json/)
                    assert.equal(res.body.status, 'OK')
                  }
                  done()
                })
            })
        }
      })
  })

  it('Should return 200 when user is updated by username', done => {
    chai.request(server)
      .put('/api/users/noa')
      .send(user)
      .end((err, res) => {
        if (err) {
          console.error(`${err.name}: ${err.message}`)
        } else {
          expect(res)
            .to.have.header('content-type', /application\/json/)
            .to.have.status(200)
          assert.equal(res.body.status, 'OK')
        }
        done()
      })
  })

  it('Should return 200 when user is updated by email', done => {
    chai.request(server)
      .put('/api/users/mikell@gmail.com')
      .send(user)
      .end((err, res) => {
        if (err) {
          console.error(`${err.name}: ${err.message}`)
        } else {
          expect(res)
            .to.have.header('content-type', /application\/json/)
            .to.have.status(200)
          assert.equal(res.body.status, 'OK')
        }
        done()
      })
  })

  it('Should return 200 when user is deleted by username or email', done => {
    chai.request(server)
      .delete('/api/users/noa')
      .end((err, res) => {
        if (err) {
          console.error(`${err.name}: ${err.message}`)
        } else {
          expect(res)
            .to.have.status(200)
            .to.have.header('content-type', /application\/json/)
          assert.equal(res.body.status, 'OK')
        }
        done()
      })
  })
})