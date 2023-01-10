import express from 'express'
import logger from 'morgan'

// Routes
import userRoute from '../user/routes/route.js'


// Exeptions
import exeption from '../exeptions/exeption.js'
import notFound from '../exeptions/notFound.js'

const app = express()

// Global Middlewares
app.use(express.json())
app.use(logger('dev'))

app.use('/v1/api', userRoute)


// Handle Errors
app.use(notFound)
app.use(exeption)

export default app