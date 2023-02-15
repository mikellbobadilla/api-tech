import { request, response } from 'express'
import Jwt from '../jwt/jwt.js'
import { config } from '../config/dotenv.js'

const isAuthenticated = async (req = request, res = response, next) => {
  try {
    const isLogging = req.url === '/v1/api/auth' && req.method.toLowerCase() === 'post'
    const isCreating = req.url === '/v1/api/users' && req.method.toLowerCase() === 'post'
    if (isLogging || isCreating) {
      return next()
    }

    const { authorization } = req.headers
    if (!authorization) throw new Error('Not authenticated or token is missing')
    const token = authorization.split('Bearer ')[1]
    const { payload } = await Jwt.verify(token, config.jwtSecret)
    req.body['payload'] = payload
    return next()
  } catch (err) {
    err.status = 401
    return next(err)
  }
}

export default isAuthenticated