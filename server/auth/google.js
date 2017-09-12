const router = require('express').Router();
const User = require('../db/user');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


// configuring the strategy (credentials + verification callback)
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/verify'
  },
  function (token, refreshToken, profile, done) {
    var info = {
      //name: profileDisplayName,
      email: profile.emails[0].value,
    };
    User.findOrCreate({
      where: {googleId: profile.id},
      defaults: info
    })
    .spread(function (user) {
      done(null, user);
    })
    .catch(done);
  })
);

router.get('/', passport.authenticate('google', {scope: 'email'}))

router.get('/verify', passport.authenticate('google', {
  successRedirect: '/', //dashboard
  failureRedirect: '/login'
}))


module.exports = router
