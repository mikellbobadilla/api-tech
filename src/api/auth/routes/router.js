import { Router } from 'express'
import AuthController from '../controller/authController.js'
const authInstance = new AuthController()

const router = Router()

/**
 * Endpoints for auth
 * /auth - POST
 * /auth/validate -POST
 * /auth/refresh - POST
 */

router.post('/auth', authInstance.authenticate.bind(authInstance))

router.post('/auth/validate', authInstance.validate.bind(authInstance))

router.post('/auth/refresh', authInstance.refreshToken.bind(authInstance))

export default router