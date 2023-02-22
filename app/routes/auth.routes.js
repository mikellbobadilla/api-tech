import { Router } from 'express'
import { authController } from '../controllers/index.js'

const router = Router()

router
  .route('/auth')
  .post(authController.auth)



export default router