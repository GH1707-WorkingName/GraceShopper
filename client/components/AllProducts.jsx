import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const AllProducts = (props) => {
  const allProducts = [{
    id: 1,
    title: 'Do You Dare',
    description: 'Ever wonder what it\'s like to be a dare-devil? Experience it first hand with out to risk.',
    imageUrl: 'http://3.bp.blogspot.com/-MmBixjQONj0/UNhJ0hn9_kI/AAAAAAAAC9k/Mim2UkIVnTw/s1600/article-1201105-05C97DC1000005DC-225_634x421.jpg',
    quantity: 10,
    price: 100,
    tags: []
  }, {
    id: 2,
    title: 'Spacing Out',
    description: 'The International Space Station is the place to be. Recycled water and air, now that is the life',
    imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/15618296264_21bc1e368e_o.jpg',
    quantity: 10,
    price: 100,
    tags: []
  }]

  return (
    <div>
      {
        allProducts.length &&
          allProducts.map(product => {
            return (
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.imageUrl}/>
                  <h2>{product.title}</h2>
                </Link>
              </div>
            )})
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    allProducts: state.products
  }
}

export default connect(mapStateToProps)(AllProducts)
