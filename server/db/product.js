const Sequelize = require ('sequelize');
const db = require('./_db');

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'http://lorempixel.com/400/200/',
    validate: {
      isUrl: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull:false,
    validate: {
      min: 0
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  }
}, {
  getterMethods: {
    price: function() {
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