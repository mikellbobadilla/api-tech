import { request, response } from 'express'

export function AuthController(authService) {
  async function auth(req = request, res = response) {
    try {
      const { identity, password } = req.body
      const token = await authService.authenticate(identity, password)

      return res
        .status(200)
        .json({
          status: 'OK',
          token: token
        })

    } catch (err) {
      return res
        .status(400)
        .json({
          status: 'BAD REQUEST',
          message: err.message
        })
    }
  }

  return Object.freeze({
    auth
  })
}