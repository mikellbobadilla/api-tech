import PostService from '../service/postService.js'

class PostController {
  constructor() {
    this.postService = new PostService()
  }

  async getAll(req, res, next) {
    try {
      const posts = await this.postService.getAll()
      return res
        .status(200)
        .json({
          posts: posts,
          length: posts.length
        })
    } catch (err) {
      return next(err)
    }
  }

  async create(req, res, next) {
    try {
      const post = req.body
      const newPost = await this.postService.create(post)
      return res
        .status(201)
        .json(newPost)

    } catch (err) {
      err.status = 400
      return next(err)
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params
      const post = req.body
      await this.postService.update(id, post)

      return res
        .status(200)
        .json({ message: 'Post Updated' })

    } catch (err) {
      err.status = 400
      return next(err)
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params

      await this.postService.delete(id)

      return res
        .status(200)
        .json({ message: 'Post deleted' })

    } catch (err) {
      err.status = 404
      return next(err)
    }
  }
}

export default PostController