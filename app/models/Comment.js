import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

// models
import User from './User.js'
import Post from './Post.js'

class Comment extends Model { }

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      id: 'id',
      model: User
    }
  },
  id_post: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      id: 'id',
      model: Post
    }
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  timestamps: false,
  createdAt: false,
  updatedAt: false,
  modelName: 'comment',
  tableName: 'comments'
})

Comment.belongsTo(User, { foreignKey: 'id_user' })
Comment.belongsTo(Post, { foreignKey: 'id_post' })
User.hasMany(Comment, { foreignKey: 'id_user' })
Post.hasMany(Comment, { foreignKey: 'id_post' })

export default Comment