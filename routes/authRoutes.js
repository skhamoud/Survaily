const passport = require('passport');
const router = require('express').Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/auth/google/return',
  passport.authenticate('google', {
    // successRedirect: '/',
    // failureRedirect: '/login',
  }),

  (req, res) => {
    res.send(req.user);
    // res.redirect('/');
  },
);

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

module.exports = router;
