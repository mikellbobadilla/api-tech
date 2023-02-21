import Post from '#Models/Post.js'
import User from '#Models/User.js'

class PostRepository {

  async getAll() {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'username', 'role']
      }
    })

    return posts
  }

  async create(posts) {
    const newPost = await Post.create({ ...posts })
    return newPost
  }

  async update(idPost, post) {
    const postUpdated = await Post.update({ ...post }, {
      where: {
        id: idPost
      }
    })
    return postUpdated
  }

  async findAllByUserId(idUser) {
    const posts = await Post.findAll({
      where: {
        id_user: idUser
      },
      include: {
        model: User,
        attributes: ['id', 'username', 'role']
      }
    })
    return posts
  }

  async delete(id) {
    const postDeleted = await Post.destroy({
      where: {
        id: id
      }
    })

    return postDeleted
  }
}

export default PostRepository