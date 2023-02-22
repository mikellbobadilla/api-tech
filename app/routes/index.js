import { Router } from 'express'
import users from './user.routes.js'
import auth from './auth.routes.js'
const router = Router()

router.use(users)
router.use(auth)

export default router