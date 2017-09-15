const router = require('express').Router()
const Product = require('../db').models.product

router.get('/', (req, res, next) => {
  Product.findAll()
    .then(allProducts => {
      res.status(200).send(allProducts)
    })
    .catch(next)
})


module.exports = router;
