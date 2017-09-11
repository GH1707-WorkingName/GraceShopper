const router = require('express').Router();
const User = require('../db/user');


router.post('/login', (req, res, next) =>{
  User.findOne({
    where: {
      email: req.body.email 
    }
  })
  .then(user => {
    if (!user) res.sendStatus(401); 
    // else {
    //  if(user.correctPassword(req.body.password)) 
    // }
  })
})

module.exports = router; 