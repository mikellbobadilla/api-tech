import { Router } from 'express'
import {
  userController
} from '../controllers/index.js'

const router = Router()
/**
 * Endpoint para usuarios
 * get /users
 * post /users
 * delete /users/:username
 * get /users/:username
 * put /users/:username -> update all fields
 */
router
  .route('/users')
  .get(userController.getAll)
  .post(userController.create)

router
  .route('/users/:userid')
  .get(userController.getOne)
  .put(userController.update)
  .delete(userController.remove)
export default router