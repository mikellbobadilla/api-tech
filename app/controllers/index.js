import * as services from '../use-cases/index.js'
import UserController from './UserController.js'

const userController = UserController(services.userService)

export {
  userController
}