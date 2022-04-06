const router = require("express").Router();

const authRoutes = require("./auth");

// determine the endpoint
// already assumes /api and will look for next peice of endpoint (/auth)
router.use("..//auth", authRoutes);

module.exports = router;
