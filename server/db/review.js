const Sequelize = require ('sequelize');
const db = require('./_db');

const Review = db.define('review', {
  rating: {
    type: Sequelize.ENUM,
    values: [1, 2, 3, 4, 5]
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Review