const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("../views/testviews.hbs");
});


module.exports = router;