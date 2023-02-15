import express from 'express'
import logger from 'morgan'

// Routes
import userRouter from '#UserRouter'
import authRouter from '#AuthRouter'

// Exeptions
import exeption from '../exeptions/exeption.js'
import notFound from '../exeptions/notFound.js'

import isAuthenticated from '../middlewares/checkAuth.js'

const app = express()

// Global Middlewares
app.use(express.json())
app.use(logger('dev'))

// app.use((req, res, next) => {
//   const isLogging = req.url === '/v1/api/auth' && req.method.toLowerCase() === 'post'
//   const isCreating = req.url === '/v1/api/users' && req.method.toLowerCase() === 'post'
//   if (isLogging || isCreating) {
//     return next()
//   }
//   const err = new Error('Nothing happens')
//   return next(err)
// })

app.use(isAuthenticated)

app.use('/v1/api', authRouter)
app.use('/v1/api', userRouter)


// Handle Errors
app.use(notFound)
app.use(exeption)

export default app