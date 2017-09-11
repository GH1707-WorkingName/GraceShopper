const Sequelize = require ('sequelize');
const db = require('./_db');

const Item = db.define('item', {
  name : {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Item