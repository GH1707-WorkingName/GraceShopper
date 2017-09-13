import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const AllProducts = (props) => {
  const {allProducts} = props
  console.log(props)
  return (
    <div>
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

const mapStateToProps = state => {
  return {
    allProducts: state.products
  }
}

const Container = connect(mapStateToProps)(AllProducts)
export default Container
