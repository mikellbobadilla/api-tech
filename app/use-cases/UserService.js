'use strict'
import bcrypt from 'bcrypt'
import { validatePassword } from '../helpers/index.js'
import { UserExeption } from '../errors/index.js'

export function UserService(usersDb) {

  async function findAll() {
    const users = await usersDb.findAll()
    return users
  }

  async function create(user) {

    const { password, username } = user

    const passwordIsValid = validatePassword(password)

    if (!passwordIsValid) {
      throw new UserExeption('password only be 8-20 characters, must be contains numbers and symbols')
    }

    const passEncoded = await bcrypt.hash(password, 10)
    const usernameLower = username.toLowerCase()

    user.password = passEncoded
    user.username = usernameLower

    const userCreated = await usersDb.create(user)
    return userCreated
  }

  async function get(identity) {
    const user = await usersDb.get(identity)

    if (!user) throw new UserExeption('User not found!')

    return user
  }

  async function update(identity, user) {
    const data = await usersDb.update(identity, user)
    return data
  }

  async function remove(identity) {
    const data = await usersDb.remove(identity)
    return data
  }

  return Object.freeze({
    findAll,
    create,
    get,
    update,
    remove
  })

}

export default UserService