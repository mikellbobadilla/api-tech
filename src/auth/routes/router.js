import { Router } from 'express'
import AuthController from '../controller/authController.js'
const authController = new AuthController()

const router = Router()

/**
 * Routes for auth
 * /auth - POST
 * /auth/validate -POST
 * /auth/refresh - POST
 */

router.post('/auth', authController.authenticate.bind(authController))

router.post('/auth/validate', authController.validate.bind(authController))

router.post('/auth/refresh', authController.refreshToken.bind(authController))

export default router