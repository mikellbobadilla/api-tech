import * as models from '../models/index.js'
import UserDb from './UserDb.js'

const usersDb = UserDb(models)

export {
  usersDb
}