import { SignJWT, jwtVerify } from 'jose'
const textToEncode = new TextEncoder()
import { config } from '#Dotenv'

class Jwt {
  constructor(payload) {
    this.jwtInstance = new SignJWT({
      id: payload.id,
      username: payload.username,
      role: payload.role
    })
  }

  async sign(secret) {
    const jwt = await this.jwtInstance
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .setIssuedAt(Date.now())
      .setExpirationTime(config.jwtExpiration)
      .sign(textToEncode.encode(secret))

    return jwt
  }
  /**
   * Verify if the token is valid
   * @param {String} token 
   * @param {String} secret 
   * @returns return information stored inside the token
   */
  static async verify(token, secret) {
    const result = await jwtVerify(token, textToEncode.encode(secret))
    return result
  }

}

export default Jwt