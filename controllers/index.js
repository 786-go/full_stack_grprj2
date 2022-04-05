const router = require("express").Router();
// below route will default to index.js automatically
const apiRoutes = require("./api");

// express will go to below folder and compares endpoint it has to /api endpoint
// as long as it starts with /api, will use /api folder
router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.render("../views/testviews.hbs");
});


module.exports = router;