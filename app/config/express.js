import express from 'express'
import logger from 'morgan'
import routes from '../routes/index.js'
const app = express()

app.use(logger('combined'))
app.use(express.json())
app.use('/api', routes)


export default app