import { Middleaware } from './middleware.js'
import { userService } from '../use-cases/index.js'
import { jwt } from '../jwt/index.js'

const middleware = Middleaware(jwt, userService)

export {
  middleware
}