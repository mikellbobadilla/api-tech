import AuthService from '../service/authService.js'

class AuthController {
  constructor() {
    this.authService = new AuthService()
  }

  async authenticate(req, res, next) {
    try {
      const { identity, password } = req.body
      const token = await this.authService.authenticate(identity, password)
      return res
        .status(200)
        .json({ token: token })
    } catch (err) {
      err.status = 400
      return next(err)
    }
  }

  async validate(req, res, next) {
    try {
      const { authorization } = req.headers

      if (!authorization) throw new Error('User not authenticated')

      const token = authorization.split('Bearer ')[1]
      await this.authService.validateToken(token)

      return res
        .status(200)
        .send()

    } catch (err) {
      err.status = 401
      next(err)
    }
  }

  async refreshToken(req, res, next) {
    try {
      const { authorization } = req.headers
      if (!authorization) throw new Error('User not authenticated')
      const token = authorization.split('Bearer ')[1]

      const payload = await this.authService.validateToken(token)

      const data = await this.authService.refreshToken(payload)

      return res
        .status(data.status)
        .json(data)

    } catch (err) {
      err.status = 401
      return next(err)
    }
  }

}

export default AuthController