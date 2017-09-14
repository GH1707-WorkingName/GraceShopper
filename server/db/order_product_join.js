const Sequelize = require ('sequelize');
const db = require('./_db');

const Order_Product = db.define('order_product', {
  quantity: {
    type: Sequelize.INTEGER
  }, 
  purchasePrice: {
    type: Sequelize.INTEGER, 
  }
}, {
  getterMethods: {
    purchasePrice: function(value){
      return this.getDataValue('purchasePrice')/100
    }
  }
});

module.exports = Order_Product;