const Sequelize = require ('sequelize');
const db = require('./_db');
const Order_Product = require('./order_product_join')
//import join here

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
        .then(function(orders){
          return orders.reduce(function(accumulator, order){
            return accumulator+order.quantity 
          }, 0)
        })
    }

  }, 
  totalCost: {
    type: Sequelize.VIRTUAL, 
    get: function(){
      return 
    }
  }
})

module.exports = Order;