import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Banner from './Banner'

export const AllProducts = ({allProducts}) => {
  return (
    <div>
    <Banner />
      {
        allProducts &&
          allProducts.map(product => {
            return (
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.imageUrl} />
                  <h2>{product.title}</h2>
                </Link>
              </div>
            )
          })
      }
    </div>
  )
}

export const mapStateToProps = state => {
  return {
    allProducts: state.products
  }
}

const AllProductsContainer = connect(mapStateToProps)(AllProducts)
export default AllProductsContainer
