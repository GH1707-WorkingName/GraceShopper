const router = require('express').Router()
const Order = require('../db').models.order

//testRoute
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