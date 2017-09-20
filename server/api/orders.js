`use strict`
const router = require('express').Router()
const Order = require('../db').models.order;
const Order_Product = require('../db').models.order_product;

//This route is not currently used, but should be used when we fetch existing cart for an authenticated user
router.get('/', (req, res, next) => {
  return Order.findOne({
    where: {
      userId: req.body.userId, 
      status: 'pending'
    }
  })
  .then(order => {
    if (order) res.status(200).send(order)
})
  .catch(next);
})

router.post('/', (req, res, next) => {
  return Order.create({
    status: 'pending'
  })
  .then(order => {
    req.session.orderId = order.id; 
    res.status(201).send(order);
  })
  .catch(next);
});

router.post('/:id', (req, res, next) => {
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

router.put('/:id', (req, res, next) => {
  Order.findById(req.params.id)
    .then(order => {
      return order.addProduct(req.body.id)
    })
    .then((addedProduct)=> {
      return addedProduct[0][0].update({quantity: 1})
    })
    .then(()=>  res.sendStatus(200))
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

router.delete('/:id/:itemId', (req, res, next)=> {
  Order.findById(req.params.id)
    .then(order => {
      order.removeProduct(req.params.itemId)
      res.sendStatus(200);
    })
    .catch(console.error);
})






module.exports = router;