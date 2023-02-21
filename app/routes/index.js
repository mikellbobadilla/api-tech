import { Router } from 'express'
import users from './user.routes.js'

const router = Router()

router.use(users)

export default router