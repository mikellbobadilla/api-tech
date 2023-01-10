import { createServer } from 'http'
import app from './express.js'
export const httpServer = createServer(app)