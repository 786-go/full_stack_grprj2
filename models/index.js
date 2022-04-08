const User = require("./User");

module.exports = {
  User,
};

const router = require("express").Router();

const userRoutes = require("..//controllers/api");

router.use("/users", userRoutes);

module.exports = router;
