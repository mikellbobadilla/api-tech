import { Router } from 'express'
const router = Router()
import UserController from '../controller/userController.js'

const userInstance = new UserController()

/**
 * Endpoint para usuarios
 * get /users
 * post /users
 * delete /users/:username
 * get /users/:username
 * put /users/:username -> update all fields
 */

router.get('/users', userInstance.getAll.bind(userInstance))

router.post('/users', userInstance.create.bind(userInstance))

router.get('/users/:username', userInstance.getOne.bind(userInstance))

router.put('/users/:username', userInstance.update.bind(userInstance))

router.delete('/users/:username', userInstance.delete.bind(userInstance))

export default router