'use strict'

const router = require('express').Router()
const Order = require('../db').models.Order

router.post('/', (req, res, next) => {
  if (!req.session.orderId) {
    Order.create(req.body, ITEM )
    .then(order => {
      res.status(201).json(order);
      req.session.orderId = order.id; 
      order.setProducts(ITEM);
      // ^^ I KNOW THIS IS WRONG 
    })
    .catch(next);
  }
})



module.exports = router;
