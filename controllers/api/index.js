const router = require("express").Router();

const authRoutes = require("./auth");

// determine the endpoint
<<<<<<< HEAD
// already assumes /api and will look for next peice of endpoint (/auth)
router.use("..//auth", authRoutes);
=======
// Express already assumes /api and will look for next peice of endpoint (/auth)
router.use("./auth", authRoutes)
>>>>>>> 4aca77babb8f5c7ce5bd36cec40694ca5ce02b34

module.exports = router;
