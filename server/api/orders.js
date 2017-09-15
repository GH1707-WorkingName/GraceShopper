`use strict`
const router = require('express').Router()
const Order = require('../db').models.order

//testRoute
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

router.get('/:id/totalQuant', (req, res, next) => {
  Order.findById(req.params.id)
    .then(function(order){
      return order.totalQuantity(req.params.id)
    })
    .then(totalQuant => {
      res.json(totalQuant)
    })

})

router.get('/:id/totalCost', (req, res, next) => {
  Order.findById(req.params.id)
    .then(function(order){
      return order.totalCost(req.params.id)
    })
    .then(totalCost => {
      res.json(totalCost)
    })

})

module.exports = router;