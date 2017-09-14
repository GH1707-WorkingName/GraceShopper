const db =  require('../server/db')
const Product = db.models.product
const app = require('../server');
//import chai from 'chai';
// import chaiProperties from 'chai-properties';
// import chaiThings from 'chai-things';
// chai.use(chaiProperties);
// chai.use(chaiThings);
const expect = require('chai').expect;
const supertest = require('supertest-as-promised');
//const sinon = require('sinon');

describe('Product Model', () => {
  beforeEach('Synchronize and clear database', () => db.sync({force: true}));
  after('Synchronize and clear database', () => db.sync({force: true}));

  describe('schema', () => {
    it('has expected schema definition', () => {
      expect(Product.attributes.title).to.be.an('object')
      expect(Product.attributes.description).to.be.an('object')
      expect(Product.attributes.imageUrl).to.be.an('object')
      expect(Product.attributes.quantity).to.be.an('object')
      expect(Product.attributes.price).to.be.an('object')
    })
  })

  describe('getterMethods', () => {
    let product;

    beforeEach('Create test product', () => {
       product = Product.build({ title: 'Do You Dare', description: 'Ever wonder what it\'s like to be a dare-devil? Experience it firsthand without the risk.', imageUrl: 'http://3.bp.blogspot.com/-MmBixjQONj0/UNhJ0hn9_kI/AAAAAAAAC9k/Mim2UkIVnTw/s1600/article-1201105-05C97DC1000005DC-225_634x421.jpg', quantity: 10, price: 100 })
    })

    describe('setterMethods', () => {
      describe('price', () => {
        it('sets the price property ', () => {
          expect(product.getDataValue('price')).to.be.equal(10000)
        })
      })
    })

    describe('price', () => {
      it('returns the value of price', () => {
        expect(product.price).to.be.equal(100)
      })
    })
  })
})
