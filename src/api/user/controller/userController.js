import { request, response } from 'express'
import UserService from '../service/userService.js'

class UserController {

  constructor() {
    this.userService = new UserService()
  }

  async getAll(req = request, res = response, next) {
    try {
      const users = await this.userService.findAll()
      return res
        .status(200)
        .json(users)
    } catch (err) {
      return next(err)
    }
  }

  async create(req, res, next) {
    try {
      const user = req.body
      const newUser = await this.userService.create(user)
      return res
        .status(201)
        .json(newUser)

    } catch (err) {
      err.message = err.errors[0].message
      err.status = 400
      return next(err)
    }
  }

  async getOne(req, res, next) {
    try {
      const { username } = req.params
      const user = await this.userService.getUser(username)
      return res
        .status(200)
        .json(user)

    } catch (err) {
      err.status = 404
      return next(err)
    }
  }

  async update(req, res, next) {
    try {
      const { username } = req.params
      const user = req.body

      // TODO: use middleware to validate if user exits
      await this.userService.getUser(username)

      await this.userService.update(username, user)
      return res
        .status(200)
        .json({ message: 'User updated' })

    } catch (err) {
      err.status = 404
      return next(err)
    }
  }

  async delete(req, res, next) {
    try {
      const { username } = req.params

      // TODO: use middleware to validate if user exits
      // await this.userService.getUser(username)

      await this.userService.delete(username)
      return res
        .status(200)
        .json({ message: 'User deleted' })

    } catch (err) {
      err.status = 404
      return next(err)
    }
  }
}

export default UserController