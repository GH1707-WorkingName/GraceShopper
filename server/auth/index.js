const router = require('express').Router();
const User = require('../db/user');

router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    if (!user) res.status(401).send('User not found');
    else if (!user.correctPassword(req.body.password)) res.status(401).send('Incorrect password');
    else {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    }
  })
  .catch(next);
});

router.post('/signup', (req, res, next) => {
  User.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: {
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
  })
  .spread( (user, isCreated) => {
    if (isCreated) {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      })
    } else {
      res.status(401).send('User already exists.')
    }
  })
  .catch(next);
});

router.post('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(200);
});

router.get('/me', (req, res, next) => {
  res.json(req.user);
})

router.use('/google', require('./google'))

module.exports = router;
