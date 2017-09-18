'use strict'

const router = require('express').Router()
const User = require('../db').models.user

router.get('/', (req, res, next) => {
  User.findById(req.session.user.id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(next)
})

router.put('/edit', (req, res, next) => {
  User.update(req.body, 
    {where: {id: req.session.user.id},
    returning: true,
    plain: true 
  })
  .then(user => {
    res.status(200).json(user)
  })
  .catch(next)
})

router.delete('/delete', (req, res, next) => {
  User.findById(req.session.user.id)
  .then(user => {
    user.destroy()
    res.status(200).send(user)
  })
  .catch(next)
})

module.exports = router;