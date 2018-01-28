const router = require('express').Router();
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(keys.stripeSecretKey);

router.post('/api/stripe', requireLogin, async (req, res) => {
  const charge = await stripe.charges.create({
    currency: 'usd',
    amount: 500,
    description: '$5 for 5 credits',
    source: req.body.id,
  });
  if (charge) {
    req.user.credits += 5;
    const user = await req.user.save();

    if (user) {
      res.send(user);
    }
  } else res.send({ amountCharged: charge });
});

module.exports = router;
