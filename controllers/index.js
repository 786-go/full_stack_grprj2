const router = require("express").Router();
let db = require("../db/db.sql")
const fs = require("fs")


router.get("/", (req, res) => {
  res.render("../views/testviews.hbs");
});









module.exports = router;