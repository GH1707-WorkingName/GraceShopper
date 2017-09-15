'use strict'

const router = require('express').Router()

router.use('/products', require('./products'))
<<<<<<< HEAD
=======
router.use('/order', require('./order'))

router.use('/orders', require('./orders'))
>>>>>>> f01b612277fd861339ac1bf8cd1f70ab5de95b14

router.use( (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err);
})

module.exports = router
