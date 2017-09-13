const Sequelize = require ('sequelize');
const db = require('./_db');
//import join here

const Order = db.define('order', {
  date: {
    type: Sequelize.DATEONLY
  }, 
  totalCost: {
    type: Sequelize.INTEGER
  }, 
  status: {
    type: Sequelize.ENUM,
    values: ['pending', 'completed']
  }, 
  totalQuantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = Order;