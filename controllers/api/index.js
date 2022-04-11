const router = require("express").Router();

const authRoutes = require("./auth");
const recipesRoutes = require("./recipes-routes")
// determine the endpoint
// Express already assumes /api and will look for next peice of endpoint (/auth) - use "/" as relative path
router.use("/auth", authRoutes)
router.use("/recipes", recipesRoutes)
// const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;