'use strict'
import { SignJWT, jwtVerify } from 'jose'
import { JWT_EXPIRATION, JWT_SECRET } from '../config/env.js'
const txtEncoder = new TextEncoder()
export function Jwt() {

  async function sign({ id, username, role }) {
    const encoded = txtEncoder.encode(JWT_SECRET)
    const jwt = await new SignJWT({ id, username, role })
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .setIssuedAt(Date.now())
      .setExpirationTime(JWT_EXPIRATION)
      .sign(encoded)

    return jwt
  }

  /**
  * Verify if the token is valid
  * @param {String} token 
  * @param {String} secret 
  * @returns return information stored inside the token
  */
  async function verify(token) {
    const result = await jwtVerify(token, txtEncoder.encode(JWT_SECRET))
    return result
  }

  return Object.freeze({
    sign,
    verify
  })
}