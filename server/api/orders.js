const router = require('express').Router()
const Order = require('../db').models.order;
const Order_Product = require('../db').models.order_product;


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

router.delete('/:id/:itemId', (req, res, next)=> {
  Order.findById(req.params.id)
    .then(order => {
      order.removeProduct(req.params.itemId)
      res.sendStatus(200);
    })
    .catch(console.error);
})

router.put('/:id/:itemId', (req, res, next)=> {
  Order_Product.update({
    quantity: +req.body.quantity
  },{
    where: {
      productId: req.params.itemId
    }
  })
    .spread((num, order) => {
      if (num) return res.status(200).json(order);
      else res.sendStatus(400);
    })
    .catch(console.error);
}) 




module.exports = router;