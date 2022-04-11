const User = require("./User");
// const Post = require("./Post");
const Recipes = require("./Recipes");
const Comment = require("./Comment");


// relate user to many recipes
User.hasMany(Recipes, {
  foreignKey: "user_id",
});

// relate recipes to individual user
Recipes.belongsTo(User, {
  foreignKey: "user_id"
});

// relate user to many posts
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// relate posts to individual user
Comment.belongsTo(User, {
  foreignKey: "user_id"
});

// relate comments to individual recipe
Comment.belongsTo(Recipes, {
  foreignKey: "recipe_id"
});

// relate user to many posts
Recipes.hasMany(Comment, {
  foreignKey: "recipe_id",
});


module.exports = {
  User,
  // Post - this is the same as Recipes,
  Recipes,
  Comment
};