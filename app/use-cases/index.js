import bcrypt from 'bcrypt'
import { usersDb } from '../data-access/index.js'
import UserService from './UserService.js'
import { AuthService } from './AuthService.js'
import { jwt } from '../jwt/index.js'

const userService = UserService(usersDb, bcrypt)
const authService = AuthService(usersDb, jwt, bcrypt)
export {
  userService,
  authService
}