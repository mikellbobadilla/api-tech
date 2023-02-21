import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

// models
import User from './User.js'
import Post from './Post.js'

class Like extends Model { }

Like.init({
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      key: 'id',
      model: User
    }
  },
  id_post: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      key: 'id',
      model: Post
    }
  }
}, {
  sequelize,
  timestamps: false,
  createdAt: false,
  updatedAt: false,
  modelName: 'like',
  tableName: 'likes'
})

User.belongsToMany(Post, { through: Like, foreignKey: 'id_user' })
Post.belongsToMany(User, { through: Like, foreignKey: 'id_post' })

export default Like