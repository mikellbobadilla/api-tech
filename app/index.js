'use strict'
import pino from 'pino'
import httpServer from './config/server.js'
import { PORT } from './config/env.js'
const logger = pino()
function main() {
  return httpServer.listen(PORT)
}

httpServer.on('listening', () => {
  logger
    .info(`Server listening on http://localhost:${PORT}`)
})

httpServer.on('error', err => {
  logger
    .error('Server was close with this errors\n ', err)
})
const server = main()


export default server /* for testing */