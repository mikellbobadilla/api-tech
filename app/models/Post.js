import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

// model
import User from './User.js'

class Post extends Model { }

Post.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      key: 'id',
      model: User
    }
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
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
  modelName: 'post',
  tableName: 'posts',
})

Post.belongsTo(User, { foreignKey: 'id_user' })
User.hasMany(Post, { foreignKey: 'id_user' })

export default Post