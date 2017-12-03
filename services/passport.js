const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
// Done this way because mongoose can get confused in some environments about multiple models
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/return',
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ googleId: profile.id });
      if (user) {
        // console.log(user);
        done(null, user);
      } else {
        new User({
          googleId: profile.id,
          displayName: profile.displayName,
        })
          .save()
          .then(savedUser => {
            // console.log(savedUser);
            done(null, savedUser);
          });
      }
    }
  )
);
