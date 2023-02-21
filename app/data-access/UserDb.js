'use strict'
import { Op } from 'sequelize'

export function UserDb({ User }) {

  async function findAll() {
    const users = await User.findAll()
    return users
  }

  async function create(user) {
    const newUser = await User.create({ ...user })
    return newUser
  }

  async function update(username, user) {
    const userUpdated = await User.update({ ...user }, {
      where: {
        username: username
      }
    })
    return userUpdated
  }

  async function get(identity) {
    const user = await User.findOne({
      where: {
        [Op.or]: [
          { username: identity },
          { email: identity }
        ]
      }
    })
    return user
  }

  async function remove(identity) {
    const userDeleted = await User.destroy({
      where: {
        [Op.or]: [
          { username: identity },
          { email: identity }
        ]
      }
    })
    return userDeleted
  }

  return Object.freeze({
    findAll,
    create,
    get,
    update,
    remove
  })
}

export default UserDb