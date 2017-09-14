const Sequelize = require ('sequelize');
const db = require('./_db');
const Order_Product = require('./order_product_join');
const Product = require('./product');


const Order = db.define('order', {
  purchaseDate: {
    type: Sequelize.DATEONLY
  }, 
  status: {
    type: Sequelize.ENUM,
    values: ['pending', 'complete']
  }, 
  totalQuantity: {
    type: Sequelize.VIRTUAL, 
    get: function(id){
      Order_Product.findAll({
        where: {
          orderId: id
        }
      })
        .then(function(orderLines){
          return orderLines.reduce(function(accumulator, line){
            return accumulator+line.quantity 
          }, 0)
        })
    }

  }, 
  totalCost: {
    type: Sequelize.VIRTUAL, 
    get: function(id){
      Order_Product.findAll({
        where: {
          orderId: id
        }
      })
      .then(function(orderLines) {
        return orderLines.reduce(function(accumulator, line) {
          return Product.findOne({where: { id: line.productId }})
          .then(product => {
            return accumulator + (line.quantity * product.price)
          })
        }, 0)
      })
    }
  }
})

module.exports = Order;