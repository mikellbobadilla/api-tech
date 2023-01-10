import { Router } from 'express'
const router = Router()

import UserService from '../service/userService.js'
import UserController from '../controller/userControler.js'

const userInstance = new UserController(new UserService())

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