const router = require('express').Router();
const authRouter = require('./authRoutes.js');
const billingRoutes = require('./billingRoutes');

router.use('/auth', authRouter);
router.use('/', billingRoutes);

module.exports = router;
