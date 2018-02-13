const router = require('express').Router();
const authRouter = require('./authRoutes.js');
const billingRoutes = require('./billingRoutes');
const surveysRoutes = require('./surveysRoutes');

router.use('/auth', authRouter);
router.use('/', billingRoutes, surveysRoutes);

module.exports = router;
