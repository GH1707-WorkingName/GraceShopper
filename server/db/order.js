const Sequelize = require ('sequelize');
const db = require('./_db');
const Order_Product = require('./order_product_join');
const Product = require('./product');

// get rid of variables you don't use --FF


const Order = db.define('order', {
  purchaseDate: {
    type: Sequelize.DATEONLY
  },
  status: {
    type: Sequelize.ENUM,
    values: ['pending', 'complete', 'inactive']
  }
})

// shipping address would be good to have here --FF

Order.prototype.totalQuantity = function(id) {
    return Order_Product.findAll({
      where: {
        orderId: id
      }
    })
      .then(function(orderLines){
        const orderTotal = orderLines.reduce(function(accumulator, line){
          return accumulator + line.quantity
        }, 0)
        return orderTotal
      })
      .catch(err => {
        console.error( err)
      })
}

Order.prototype.totalCost = function(id) {
    return Order_Product.findAll({
      where: {
        orderId: id
      }
    })
    .then(function(orderLines) {
      return orderLines.reduce(function(accumulator, line) {
        return accumulator + (line.quantity * line.purchasePrice)
      }, 0)
    })
}

module.exports = Order;
