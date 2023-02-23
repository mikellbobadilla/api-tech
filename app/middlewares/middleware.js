'use strict'
import { request, response } from 'express'
import { AuthExeption, UserExeption } from '../errors/index.js'

export function Middleaware(jwt, userService) {

  async function isAuth(req = request, res = response, next) {
    try {
      const isGoingTo =
        (req.url === '/auth' || req.url === '/users')
        &&
        req.method.toLowerCase() === 'post'

      if (isGoingTo) {
        return next()
      }

      const { authorization } = req.headers

      if (!authorization) throw new AuthExeption('No Authenticated')

      const token = authorization.split('Bearer ')[1]
      const { payload } = await jwt.verify(token)
      req.body['payload'] = payload
      return next()

    } catch (err) {
      return res
        .status(401)
        .json({
          status: 'UNAUTHORIZED',
          message: err.message
        })
    }
  }

  async function isAllowed(req = request, res = response, next) {
    try {
      const isGoingTo =
        req.url === '/users'
        &&
        (req.method.toLowerCase() === 'post' || req.method.toLowerCase() === 'get')

      if (isGoingTo) {
        return next()
      }

      const { payload } = req.body
      const user = await userService.get(payload.username)
      const isAllow = user.username === payload.username
      if (!isAllow) throw new UserExeption('Not Allowed')

      next()

    } catch (err) {
      return res
        .status(403)
        .json({
          status: 'FORBIDDEN',
          message: err.message
        })
    }
  }

  return Object.freeze({
    isAuth,
    isAllowed
  })

}
