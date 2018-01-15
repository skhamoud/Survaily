const router = require('express').Router();
const authRouter = require('./authRoutes.js');

router.use('/auth', authRouter);

module.exports = router;
