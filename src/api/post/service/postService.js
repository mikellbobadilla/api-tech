import PostRepository from '../repository/postRepository.js'

class PostService {
  constructor() {
    this.postRepository = new PostRepository()
  }

  async getAll() {
    const posts = await this.postRepository.findAll()
    return posts
  }

  async create(data) {
    const post = await this.postRepository.create(data)
    return post
  }

  async update(idPost, data) {
    await this.postRepository.update(idPost, data)
  }

  async delete(id) {
    await this.postRepository.delete(id)
  }

  async userPosts(idUser) {
    const posts = await this.postRepository.findAllByUserId(idUser)
    return posts
  }
}

export default PostService