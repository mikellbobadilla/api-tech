'use strict'
import { AuthExeption } from '../errors/index.js'

export function AuthService(usersDb, jwt, bcrypt) {

  async function authenticate(identity, password) {
    const user = await usersDb.get(identity)

    if (!user) throw new AuthExeption('Credentials ivalid')

    const validatePass = await bcrypt.compare(password, user.password)

    if (!validatePass) throw new AuthExeption('Credentials ivalid')

    const token = await jwt.sign(user)

    return token
  }


  /* Not Implemented but the service is here :) */
  async function updateToken(token) {

    const { payload } = await jwt.verify(token)

    const user = await usersDb.get(payload.username)

    if (!user) throw new AuthExeption('Token Invalid') // May be AuthExeption

    const now = Date.now() // Actual Day
    const expires = payload.iat + 172800000 //] 48 hours
    const data = {}

    if (now < expires) {
      data.message = "Your token is still valid!"
    } else {
      const tokenUpdated = await jwt.sign(payload)
      data.message = "Token updated!"
      data.token = tokenUpdated
    }
    return data
  }

  return Object.freeze({
    authenticate,
    updateToken
  })
}
/**
 * --------------------------------------------- Pseudocodigo ---------------------------------------------
 * Proceso: Comprobar si el token venció -> Es una Función que recibe como parámetro el payload del token
 *    DEFINIR diaActual COMO Date.now() -> Devuelve el dia actual como Universal Coordinated Time
 *    DEFINIR diaVencimiento COMO Number -> El numero es en timestamp
 *    DEFINIR data COMO objeto -> objeto   
 * 
 *    SI diaActual < diaVencimiento ENTONCES:
 *      data.message = "Your toker is still valid!" 
 *    SINO 
 *      DEFINIR tokenCreado = crearToken(param) 
 *      data.message = "Token updated"
 *      data.toke = tokenCreado
 *    FIN SI
 * 
 *    RETORNAR data
 */