import {expect} from 'chai'
import AllProducts from '../client/components/AllProducts'
import {fetchAllProducts, getAllProducts} from '../client/reducers/allProducts'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockAxios = new MockAdapter(axios)
const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe.only('thunk creators', () => {
  let store

  const initialState = {products: []}

  beforeEach(() => {
    store = mockStore(initialState)
  })

  afterEach(() => {
    store.clearActions()
  })

  describe('getAllProducts', () => {
    it('eventually dispatches the GET_ALL_PRODUCTS action', () => {
      const fakeAllProducts = [
        { title: 'Do You Dare', description: 'Ever wonder what it\'s like to be a dare-devil? Experience it firsthand without the risk.', imageUrl: 'http://3.bp.blogspot.com/-MmBixjQONj0/UNhJ0hn9_kI/AAAAAAAAC9k/Mim2UkIVnTw/s1600/article-1201105-05C97DC1000005DC-225_634x421.jpg', quantity: 10, price: 100 }]
      mockAxios.onGet('/api/products').replyOnce(200, fakeAllProducts)
      return store.dispatch(fetchAllProducts())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('GET_ALL_PRODUCTS')
          expect(actions[0].allProducts).to.be.deep.equal(fakeAllProducts)
        })
    })
  })
})
