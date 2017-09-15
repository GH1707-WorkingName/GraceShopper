import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
<<<<<<< HEAD
=======
import Banner from './Banner'
>>>>>>> f01b612277fd861339ac1bf8cd1f70ab5de95b14

export const AllProducts = ({allProducts}) => {
  return (
    <div>
<<<<<<< HEAD
=======
    <Banner />
>>>>>>> f01b612277fd861339ac1bf8cd1f70ab5de95b14
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

<<<<<<< HEAD
const mapStateToProps = state => {
=======
export const mapStateToProps = state => {
>>>>>>> f01b612277fd861339ac1bf8cd1f70ab5de95b14
  return {
    allProducts: state.products
  }
}

const AllProductsContainer = connect(mapStateToProps)(AllProducts)
export default AllProductsContainer
