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

router.delete('/:id/:itemId', (req, res, next)=> {
  Order.findById(req.params.id)
    .then(order => {
      order.removeProduct(req.params.itemId)
      res.sendStatus(200);
    })
    .catch(console.error);
})

// new router needed to purely add new row in product_order table

// this also needs a new else if statement, to check if the item already exists in the currentOrder STore
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