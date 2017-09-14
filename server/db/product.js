const Sequelize = require ('sequelize');
const db = require('./_db');
const Order = ('./order');
const Order_Product = require('./order_product_join');

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
<<<<<<< HEAD
    allowNull:false,
    validate: {
      min: 0
    }
=======
    allowNull: false
>>>>>>> 0e2ffae702e943522ce1a9b85daf1fb3c6933781
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
// }, {
//   hooks: {
//     afterUpdate: (product, options) => {
//       if(product.changed('price')) {
//         Order_Product.findAll({
//           where: {productId: product.id},
//           include: [{
//             model: Order,
//             where: {status: 'pending'}
//           }]
//         })
//         .then(orders => {
//           console.log('orders', orders)
//         })
//       }
     
//     }
//   }
// });
});

module.exports = Product;

//purchase price in order_product will be null by default.  When an item is added to a cart and/or when a cart is accessed, the price will be queried from the Product table.  After checkout is completed and the order is set to completed status, then you will set purchaseprice.