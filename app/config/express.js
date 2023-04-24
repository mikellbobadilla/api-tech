import express from 'express'
import logger from 'morgan'
import routes from '../routes/index.js'
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use('/api', routes)
app.use('*', (_, res) => {
  return res
    .status(404)
    .json({
      status: 'NOT FOUND',
      message: 'This page it does not exist'
    })
})

export default app