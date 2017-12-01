const router = require("express").Router();
const authRouter = require("./authRoutes.js");

router.get("/", (req, res) => {
  res.send({ hi: "there" });
});

router.use("/auth", authRouter);

module.exports = router;
