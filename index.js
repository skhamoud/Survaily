const express = require("express");
const passport = require("passport");
const router = require("./routes");
const app = express();

const passportConfig = require("./services/passport");
app.use(passport.initialize(passportConfig));
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.warn("listening on PORT ", PORT);
});
