import { Router } from 'express'
const router = Router()

/**
 * Endpoints para los Posts (El usuario debe estar autenticado)
 * GET /posts
 * GET /posts/:idUser
 * POST /posts
 * PUT /posts/:id
 * DELETE /posts/:id
 */

export default router