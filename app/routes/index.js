import { Router } from 'express'
import users from './user.routes.js'
import auth from './auth.routes.js'
import { middleware } from '../middlewares/index.js'

const router = Router()
router.use(middleware.isAuth)
router.use(auth)
router.use(middleware.isAllowed, users)

export default router