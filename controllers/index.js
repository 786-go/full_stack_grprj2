const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("../views/testviews.hbs", { title: "Recipes" });
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
