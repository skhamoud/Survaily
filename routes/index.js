const router = require('express').Router();
const authRouter = require('./authRoutes.js');

router.get('/', (req, res) => {
  if (req.user) res.send(req.user);
  else res.send('Please Login ');
});

router.use('/', authRouter);

module.exports = router;
