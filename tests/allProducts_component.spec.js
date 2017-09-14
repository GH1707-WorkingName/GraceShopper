/* global describe beforeEach it */

import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
import {shallow} from 'enzyme'
import {AllProducts, mapStateToProps } from '../client/components/AllProducts'
import store from '../client/store'

describe('AllProducts', () => {
  let fakeAllProducts
  let productsArr = [
    { title: 'Do You Dare', description: 'Ever wonder what it\'s like to be a dare-devil? Experience it firsthand without the risk.', imageUrl: 'http://3.bp.blogspot.com/-MmBixjQONj0/UNhJ0hn9_kI/AAAAAAAAC9k/Mim2UkIVnTw/s1600/article-1201105-05C97DC1000005DC-225_634x421.jpg', quantity: 10, price: 100 },
    { title: 'Spacing Out', description: 'The International Space Station is the place to be. Recycled water and air, now that is the life!', imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/15618296264_21bc1e368e_o.jpg', quantity: 10, price: 100 }
  ]

  beforeEach('', () => {
    fakeAllProducts = shallow(<AllProducts allProducts={productsArr} />)
  })

  it('renders product titles from array of products in an h2', () => {
    expect(fakeAllProducts.find('h2').at(0).text()).to.be.equal('Do You Dare')
    expect(fakeAllProducts.find('h2').at(1).text()).to.be.equal('Spacing Out')
  })

  it('mapStateToProps returns products from state?', () => {
    let fakeState = {
      products: productsArr
    }
    expect(mapStateToProps(fakeState)).to.be.deep.equal({allProducts: productsArr})
  })
})
