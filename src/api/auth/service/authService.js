import bcrypt from 'bcrypt'
import UserRepository from '#User/repository/userRepository.js'
import Jwt from '#Jwt'
import { config } from '#Dotenv'

class AuthService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  /**
   * Validate the info user and return the token jwt
   * @param {String} identity may be username or email
   * @param {String} password  password
   */
  async authenticate(identity, password) {
    const user = await this.userRepository.getUserForAuth(identity)

    if (!user) throw new Error('Credentials are not valid')

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) throw new Error('Credentials are not valid')

    const jwt = new Jwt(user)

    const token = await jwt.sign(config.jwtSecret)

    return token
  }

  async _validateUser({ username }) {
    const user = await this.userRepository.getByUsername(username)
    return user
  }

  async validateToken(token) {
    const { payload } = await Jwt.verify(token, config.jwtSecret)
    const user = await this._validateUser(payload)
    if (!user) throw new Error('Token invalid!')

    return payload
  }

  async _createToken(payload) {
    const jwt = new Jwt(payload)
    const token = await jwt.sign(config.jwtSecret)
    return token
  }


  async refreshToken(payload) {
    const now = Date.now() // Actual Day
    const expires = payload.iat + 172800000 //] 48 hours
    const data = {}

    if (now < expires) {
      data.message = "Your token is still valid!"
    } else {
      const tokenUpdated = await this._createToken(payload)
      data.message = "Token updated!"
      data.token = tokenUpdated
    }
    return data
  }

}

export default AuthService