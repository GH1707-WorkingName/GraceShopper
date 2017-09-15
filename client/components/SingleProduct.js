import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store'
import Banner from './Banner'


class SingleProduct extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const allProducts = this.props.allProducts
    const singleProduct = allProducts.filter(product=> product.id === this.props.match.params.id)
    return (
      <div>
        <Banner />
          <div className = "container">
            <div>
            <h1> <span id = "productTitle">{singleProduct.title}</span></h1> 
            <h3><span id = "productPrice">Price: {singleProduct.price}</span></h3>
            </div>
            <div>
              <img src = {singleProduct.imageUrl} width = {200} height = {200}/>
            </div>
            <h5><span id = "quantityRemaining">{singleProduct.quantity}</span> </h5>
          </div>
      </div> 
    )
  }
}

const mapStateToProps = state => {
  return {
    allProducts: state.products
  }
}

const SingleProductContainer = connect(mapStateToProps)(SingleProduct)
export default SingleProductsContainer