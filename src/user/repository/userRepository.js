import User from '../../models/User.js'

class UserRepository {
  async findAll() {
    const users = await User.findAll({
      attributes: ['name', 'last_name', 'age', 'username', 'email', 'charge']
    })
    return users
  }

  async create(user) {
    const newUser = await User.create({ ...user })
    return newUser
  }

  async update(username, user) {
    const userUpdated = await User.update({ ...user }, {
      where: {
        username: username
      }
    })
    return userUpdated
  }

  async getByUsername(username) {
    const user = await User.findOne({
      attributes: ['name', 'last_name', 'age', 'username', 'email', 'charge'],
      where: {
        username: username
      }
    })
    return user
  }

  async delete(username) {
    const userDeleted = await User.destroy({
      where: {
        username: username
      }
    })
    return userDeleted
  }
}

export default UserRepository