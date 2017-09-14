const router = require('express').Router()
const Order = require('../db').models.order

//testRoute
router.get('/:id/totalQuant', (req, res, next) => {
  Order.findById(req.params.id)
    .then(function(order){
      return order.totalQuantity
    })

})

module.exports = router;