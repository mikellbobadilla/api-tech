import bcrypt from 'bcrypt'
import UserRepository from '../repository/userRepository.js'

const userRepository = new UserRepository()

class UserService {

  async getAll() {
    const users = userRepository.findAll()
    return users
  }

  async create(user) {
    user.password = await bcrypt.hash(user.password, 10)
    user.username = user.username.toLowerCase()
    const newUser = await userRepository.create(user)
    return newUser
  }

  async getUser(username) {
    const user = await userRepository.getByUsername(username)

    if (!user) throw new Error('User not found')

    return user
  }

  async update(username, user) {
    await userRepository.update(username, user)
  }

  async delete(username) {
    await userRepository.delete(username)
  }
}

export default UserService