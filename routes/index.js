const router = require('express').Router();
const authRouter = require('./authRoutes.js');

router.get('/', (req, res) => {
  res.send(req.user);
});

router.use('/', authRouter);

module.exports = router;
