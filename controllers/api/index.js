const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/api/users', userRoutes);

module.exports = router;
