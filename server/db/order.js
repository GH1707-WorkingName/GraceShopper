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
    values: ['pending', 'complete', 'inactive']
  }
})

 
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

Order.prototype.totalCost = async function(id) {
  try {
    const orderLines = await Order_Product.findAll({
      where: {
        orderId: id
      }
    })
    const productPrices = await Promise.all(orderLines.map(async line => {
      const product = await Product.findById(line.productId)
      return (product.price * line.quantity)/100
    }))
    const totalPrice = productPrices.reduce((accumulator, price) => {
      return accumulator + price
    })
    return totalPrice
  } catch(e) {
    console.error(e)
  }
}



module.exports = Order;