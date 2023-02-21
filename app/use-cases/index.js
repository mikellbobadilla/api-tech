import { usersDb } from '../data-access/index.js'
import UserService from './UserService.js'

const userService = UserService(usersDb)

export {
  userService
}