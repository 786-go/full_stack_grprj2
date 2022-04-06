const router = require("express").Router();
// already gone to /auth route.  The below is a route for /api/auth
const User = require("../../models/User");
router.post("/", (req, res) => {
  // const{email, password}=req.body
  User.create(req.body)
    .then((banana) => {
      res.json(banana);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
