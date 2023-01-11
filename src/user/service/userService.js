import bcrypt from 'bcrypt'
import UserRepository from '../repository/userRepository.js'

class UserService {

  constructor() {
    this.userRepository = new UserRepository()
  }

  async getAll() {
    const users = this.userRepository.findAll()
    return users
  }

  async create(user) {
    const passEncoded = await bcrypt.hash(user.password, 10)
    user.password = passEncoded
    user.username = user.username.toLowerCase()
    console.log(user)
    const newUser = await this.userRepository.create(user)
    return newUser
  }

  async getUser(username) {
    const user = await this.userRepository.getByUsername(username)

    if (!user) throw new Error('User not found')

    return user
  }

  async update(username, user) {
    await this.userRepository.update(username, user)
  }

  async delete(username) {
    await this.userRepository.delete(username)
  }
}

export default UserService