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
    console.log(user)
    if (!user) throw new Error('Credentials are not valid')

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) throw new Error('Credentials are not valid')

    delete user.password
    delete user.email

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
    if (!user) throw new Error('Token valid but the user does not exits')

    return payload
  }

  async _createToken(payload) {
    const jwt = new Jwt(payload)
    const token = await jwt.sign(config.jwtSecret)
    return token
  }


  /**
   * Fecha de creación 
   * Fecha de vencimiento => cantMillisec =  fechaDeCreacion + FechaDeVencimiento
   * Condicion para refrescar el token -> que solo falten 2 horas o menos para crear otro token
   * 
   * 
   */
  async refreshToken(payload) {
    const twoHours = 720000 // Millisecons -> (1h -> 360S * 2) * 1000 Millisecons
    const today = Date.now() // Actual Day
    const expires = payload.iat + 172800000 //] 48 hours
    const result = today - expires

    const data = {}

    if (result > twoHours || result < 0) {
      data.message = 'Token is still valid!'
      data.status = 200
    } else {
      const token = await this._createToken(payload)
      data.status = 201
      data.message = "Token updated!"
      data.token = token
    }

    return data
  }

}

export default AuthService