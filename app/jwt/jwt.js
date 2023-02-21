import { SignJWT, jwtVerify } from 'jose'
import { JWT_EXPIRATION, JWT_SECRET } from '../config/env.js'
const txtEncoder = new TextEncoder()
export function Jwt() {
  async function sign({ id, username, role }) {
    const jwt = new SignJWT({
      id,
      username,
      role
    })

    await jwt
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .setIssuedAt(Date.now())
      .setExpirationTime(JWT_EXPIRATION)
      .sign(txtEncoder.encode(JWT_SECRET))
    return jwt
  }

  /**
 * Verify if the token is valid
 * @param {String} token 
 * @param {String} secret 
 * @returns return information stored inside the token
 */
  async function verify(token, secret) {
    const result = await jwtVerify(token, textToEncode.encode(secret))
    return result
  }

  return {
    sign,
    verify
  }
}