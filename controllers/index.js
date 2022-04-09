const router = require("express").Router();
// below route will default to index.js automatically
const apiRoutes = require("./api");

// express will go to below folder and compares endpoint it has to /api endpoint
// as long as it starts with /api, will use /api folder
router.use("/api", apiRoutes);
// let db = require("../db/db.sql") THIS IS AN UNCALLED VARIABLE. COMMENTED OUT FOR NOW ON 4/4/2022 AND SERVER STARTED. 
const fs = require("fs")


router.get("/", (req, res) => {
  res.render("../views/testviews.hbs", {
    title: "Recipes"
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});








module.exports = router;