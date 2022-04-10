const sequelize = require('../config/connection');
// below is also in home-routes.js
const {
  Comment,
  Recipes,
  User,
  Users
} = require('../models');
const router = require("express").Router();
const userRoutes = require('./user-routes.js');
// below route will default to index.js automatically
const apiRoutes = require("./api");

// express will go to below folder and compares endpoint it has to /api endpoint
// as long as it starts with /api, will use /api folder
router.use("/api", apiRoutes);
// let db = require("../db/db.sql") THIS IS AN UNCALLED VARIABLE. COMMENTED OUT FOR NOW ON 4/4/2022 AND SERVER STARTED. 
// user-routes must be defined to call this
// router.use('./user-routes', userRoutes);
const fs = require("fs")

router.get('/', (req, res) => {
  // render the homepage.hbs
  res.render('homepage', {
    id: 1,
    post_url: 'https://handlebarsjs.com/guide/',
    title: 'Handlebars Docs',
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: 'test_user'
    }


  });
});

router.get("/", (req, res) => {
  res.render("../views/testviews.hbs", {
    title: "Recipes"
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});


// used below from module, but doesn't work - res is not defined
// res.render('post', {
//   post
// });






module.exports = router;