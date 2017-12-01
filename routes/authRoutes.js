const passport = require("passport");
const router = require("express").Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/return",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login"
  }),

  (req, res) => {
    console.log(req);
  }
);

module.exports = router;
