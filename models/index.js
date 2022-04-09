const User = require("./User");

module.exports = {
  User,
};

const router = require("express").Router();

const userRoutes = require("..//controllers/api");

router.use("/users", userRoutes); //CHANGED THIS TO /users ?? I THINK 

// const User = require('./User');
const Recipes = require("./Recipes");

User.hasMany(Recipes, {
  foreignKey: "user_id",
});

module.exports = { User, Recipes };

module.exports = router;
