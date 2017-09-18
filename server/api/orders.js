`use strict`
const router = require('express').Router()
const Order = require('../db').models.order;
const Order_Product = require('../db').models.order_product;

//testRoute
router.post('/', (req, res, next) => {
  return Order.create({
    status: 'pending'
  })
  .then(order => {
    console.log("ORDER CREATED", order)
    req.session.orderId = order.id; 
    res.status(201).send(order);
  })
  .catch(next);
});

router.post('/', (req, res, next) => {
  Order.update({
    setProduct:req.params.productId
    //somewhere here, need to update Quantity on O_P
    //dispatch the updateExistingItem thunk to update the quantity
  },{
    where: {
      id: req.session.orderId
    }
  })
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
    quantity:req.body.quantity
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