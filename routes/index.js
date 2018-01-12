const router = require('express').Router();
const authRouter = require('./authRoutes.js');

router.get('/', (req, res) => {
  if (req.user) res.json(req.user);
  else res.json('Please Login');
});

router.use('/', authRouter);

module.exports = router;
