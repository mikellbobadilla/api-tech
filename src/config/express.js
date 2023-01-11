import express from 'express'
import logger from 'morgan'

// Routes
import userRouter from '#UserRouter'
import authRouter from '#AuthRouter'

// Exeptions
import exeption from '../exeptions/exeption.js'
import notFound from '../exeptions/notFound.js'

const app = express()

// Global Middlewares
app.use(express.json())
app.use(logger('dev'))

app.use('/v1/api', userRouter)
app.use('/v1/api', authRouter)


// Handle Errors
app.use(notFound)
app.use(exeption)

export default app