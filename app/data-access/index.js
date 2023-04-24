import * as models from '../models/index.js'
import { UserDb } from './UserDb.js'
import { PostDb } from './PostDb.js'
const usersDb = UserDb(models)
const postDb = PostDb(models)

export {
  usersDb,
  postDb
}