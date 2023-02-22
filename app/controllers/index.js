import * as services from '../use-cases/index.js'
import { AuthController } from './AuthController.js'
import UserController from './UserController.js'

const userController = UserController(services.userService)
const authController = AuthController(services.authService)
export {
  userController,
  authController
}