const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

Recipes.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ingredients: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  post_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  directions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
}, {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'recipes',
});

module.exports = Recipes;