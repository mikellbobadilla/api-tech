'use strict'
import { request, response } from 'express'
import { UserExeption } from '../errors/index.js'

export function userController(userService) {

  async function getAll(req = request, res = response) {
    try {
      const users = await userService.findAll()

      return res
        .status(200)
        .json({
          status: 'OK',
          data: users
        })

    } catch (err) {
      return res
        .status(400)
        .json({
          status: 'BAD REQUEST',
          cause: err.message
        })
    }
  }

  async function create(req = request, res = response) {
    try {
      const { user } = req.body
      const newUser = await userService.create(user)
      return res
        .status(201)
        .json({
          status: 'CREATED',
          data: newUser
        })
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        err.message = 'This user already exists'
      }
      return res
        .status(400)
        .json({
          status: 'BAD REQUEST',
          message: err.message
        })
    }
  }

  async function getOne(req = request, res = response) {
    try {
      const { userid } = req.params
      const user = await userService.get(userid)

      return res
        .status(200)
        .json({
          status: 'OK',
          data: user
        })

    } catch (err) {
      if (err instanceof UserExeption) {
        return res
          .status(404)
          .json({
            status: 'NOT FOUND',
            message: err.message
          })
      }
      return res
        .status(400)
        .json({
          status: 'BAD REQUEST',
          message: err.message
        })
    }
  }

  async function update(req = request, res = response) {
    try {
      const { userid } = req.params
      const { user } = req.body
      const { payload } = req.body

      const u = await userService.get(userid)

      const isAllow = (payload.username === u.username)
      if (!isAllow) {
        throw new UserExeption('Request not allowed')
      }

      const data = await userService.update(userid, user)

      return res
        .status(200)
        .json({
          status: 'OK',
          message: 'user updated!',
          data: user
        })

    } catch (err) {
      return res
        .status(400)
        .json({
          status: 'BAD REQUEST',
          message: err.message
        })
    }
  }

  async function remove(req = request, res = response) {
    try {
      const { userid } = req.params
      const { payload } = req.body

      const u = await userService.get(userid)

      const isAllow = (payload.username === u.username)
      if (!isAllow) {
        throw new UserExeption('Request not allowed')
      }

      const data = await userService.remove(userid)
      return res
        .status(200)
        .json({
          status: 'OK',
          message: 'User deleted'
        })

    } catch (err) {
      return res
        .status(400)
        .json({
          status: 'BAD REQUEST',
          message: err.message
        })
    }
  }

  return Object.freeze({
    getAll,
    create,
    getOne,
    update,
    remove
  })
}

export default userController