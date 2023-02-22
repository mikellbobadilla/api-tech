import bcrypt from 'bcrypt'
import { usersDb } from '../data-access/index.js'
import UserService from './UserService.js'
import { AuthService } from './AuthService.js'
import { Jwt } from '../jwt/jwt.js'

const jwt = Jwt()

console.log(await jwt.sign({
  id: 1,
  username: 'sting',
  role: 'USER'
}))

const userService = UserService(usersDb, bcrypt)
const authService = AuthService(usersDb, jwt, bcrypt)
export {
  userService,
  authService
}