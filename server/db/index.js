const Sequelize = require('sequelize');
const db = require('./_db');
const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const Order_Product = require('./order_product_join');


//associations here

Order.belongsToMany(Product, { through: Order_Product})

module.exports = db;