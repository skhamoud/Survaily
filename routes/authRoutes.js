const passport = require('passport');
const router = require('express').Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/return', passport.authenticate('google'), (req, res) => {
  res.redirect('/surveys');
});

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logOut();
  req.session = null;
  res.redirect('/');
});

module.exports = router;
