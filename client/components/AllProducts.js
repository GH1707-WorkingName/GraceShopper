import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Banner from './Banner'

export const AllProducts = ({allProducts}) => {
  return (
    <div>
    <Banner />
      <div className="row">
      {
        allProducts &&
          allProducts.map(product => {
            return (
              <div className = "container" key={product.id}>
              <div key={product.id} className="col-sm-4">
                <Link to={`/products/${product.id}`}>
                  <img src={product.imageUrl} />
                  <h2>{product.title}</h2>
                  <h3>${product.price}</h3>
                </Link>
              </div>
              </div>
            )
          })
      }
      </div>
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
