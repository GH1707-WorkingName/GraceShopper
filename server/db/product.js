const Sequelize = require ('sequelize');
const db = require('./_db');

// OB/FJF: consider validations (not urgent)
const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'http://lorempixel.com/400/200/'
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  price: {
    type: Sequelize.INTEGER, // OB/FJF: great!
    allowNull: false
  }
}, {
  getterMethods: {
    price: function() {
      // OB/FJF: inconsistent code styling (semicolons)
      return this.getDataValue('price') / 100
    }
  },
  setterMethods: {
    price: function(value) {
      this.setDataValue('price', value * 100)
    }
  }
});

module.exports = Product;