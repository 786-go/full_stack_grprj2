const User = require('./User');
const Recipes = require('./Recipes');

User.hasMany(Recipes, {
  foreignKey: 'user_id',
});


module.exports = { User, Recipes };



