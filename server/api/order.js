'use strict'

const router = require('express').Router()
const Order = require('../db').models.Order

router.post('/', (req, res, next) => {
  if (!req.session.orderId) {
    Order.create({
      status: 'pending'
    })
    .then(order => {
      req.session.orderId = order.id;
      order.setProduct(req.body.product);
      res.status(201).json(order);
    })
    .catch(next);
  }
})

module.exports = router;
