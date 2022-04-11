const sequelize = require('../config/connection');
// below is also in home-routes.js
// const {
//   Comment,
//   Recipes,
//   User,
//   Users
// } = require('../models');
const router = require("express").Router();
// below route will default to index.js automatically
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

// express will go to below folder and compares endpoint it has to /api endpoint
// as long as it starts with /api, will use /api folder
router.use("/api", apiRoutes);
// let db = require("../db/db.sql") THIS IS AN UNCALLED VARIABLE. COMMENTED OUT FOR NOW ON 4/4/2022 AND SERVER STARTED. 
// if not api route, use homeRoute
router.use("/", homeRoutes);
const fs = require("fs")


// used below from module, but doesn't work - res is not defined
// res.render('post', {
//   post
// });


module.exports = router;