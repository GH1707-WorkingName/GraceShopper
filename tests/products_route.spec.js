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

describe('// Product Routes //', () => {

  beforeEach('Synchronize and clear database', () => db.sync({force: true}));
  after('Synchronize and clear database', () => db.sync({force: true}));

  describe('HTTP Server', () => {
    let agent;
    beforeEach('Set up agent for testing', () => {
      agent = supertest.agent(app)
    })

    describe('api routes', () => {
      let product1, product2

      beforeEach('Seed products', () => {
        let products = [
          { title: 'Do You Dare', description: 'Ever wonder what it\'s like to be a dare-devil? Experience it firsthand without the risk.', imageUrl: 'http://3.bp.blogspot.com/-MmBixjQONj0/UNhJ0hn9_kI/AAAAAAAAC9k/Mim2UkIVnTw/s1600/article-1201105-05C97DC1000005DC-225_634x421.jpg', quantity: 10, price: 100 },
          { title: 'Spacing Out', description: 'The International Space Station is the place to be. Recycled water and air, now that is the life!', imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/15618296264_21bc1e368e_o.jpg', quantity: 10, price: 100 }
        ]
        return Product.bulkCreate(products, {returning: true})
          .then(createdProducts => {
            product1 = createdProducts[0].id
            product2 = createdProducts[1].id
          })
      })

      describe('products', () => {
        it('serves up all products on request on GET /api/products', () => {
          return agent.get('/api/products')
            .expect(200)
            .then(res => {
              expect(res.body).to.be.an('array')
              expect(res.body.length).to.be.equal(2)
              expect(res.body).to.contain.thing.with('id', product1)
              expect(res.body).to.contain.thing.with('id', product2)
            })
        })
      })
    })
  })
})
