const router = require("express").Router();

const authRoutes = require("./auth");

// determine the endpoint
// Express already assumes /api and will look for next peice of endpoint (/auth)
router.use("./auth", authRoutes)
// const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/api/users', userRoutes);

module.exports = router;
