import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/sequelize.js'

class User extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Name is required'
      },
      isAlpha: {
        msg: 'Name must be only letters'
      }
    }
  },
  last_name: {
    type: DataTypes.STRING(40),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Name is required'
      },
      isAlpha: {
        msg: 'Name must be only letters'
      }
    }
  },
  age: {
    type: DataTypes.INTEGER(100),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Age is required'
      },
      min: {
        args: 16,
        msg: 'Only users over 16'
      },
      max: {
        args: 100,
        msg: 'Age is not valid'
      }
    }
  },
  username: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: {
        msg: 'Username must be only letters, numbers and simbols'
      },
      notEmpty: {
        msg: 'Username is required'
      }
    }
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'Email is required'
      },
      isEmail: {
        msg: 'Email is not valid'
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Password is required'
      },
      min: {
        args: 8,
        msg: 'Password must be over 8 characters'
      }
    }
  },
  charge: {
    type: DataTypes.STRING(40),
    allowNull: true,
    validate: {
      notEmpty: {
        msg: 'Charge is required'
      },
      isAlpha: {
        msg: 'Name must be only letters'
      }
    }
  },
  role: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'USER',
    validate: {
      isAlpha: {
        msg: 'Role must be only letters'
      }
    }
  }
}, {
  sequelize,
  modelName: 'user',
  tableName: 'users',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

export default User