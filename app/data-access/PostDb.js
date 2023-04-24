export function PostDb({ Post }) {

  async function findAll() {
    const posts = await Post.findAll({
      include: {
        model: 'users'
      }
    })
    return posts
  }

  async function create(post) {
    const newPost = await Post.create({ ...post })
    return newPost
  }

  async function update(idPost, post) {
    const postUpdated = await Post.update({ ...post }, {
      where: {
        id: idPost
      }
    })
    return postUpdated
  }

  async function remove(id) {
    const postDeleted = await Post.destroy({
      where: {
        id: id
      }
    })
    return postDeleted
  }

  async function getByUserId(idUser) {
    const posts = await Post.findAll({
      where: {
        id_user: idUser
      },
      include: {
        model: 'users'
      }
    })
  }

  return Object.freeze({
    findAll,
    create,
    update,
    remove,
    getByUserId
  })
}