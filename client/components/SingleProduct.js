import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store'
import Banner from './Banner'
import {fetchSingleProduct} from '../reducers/singleProduct'

class SingleProduct extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const allProducts = this.props.allProducts
    const singleProduct = allProducts && allProducts.filter(product=> product.id === Number(this.props.match.params.id))

    return (
      <div>
        <div className = "container">
          { singleProduct.length &&
          <div>
              <div>
                <h1> <span id = "productTitle">{singleProduct[0].title}</span></h1>
                <h4><span id = "productPrice">Price: ${singleProduct[0].price}</span></h4>
                <h5><span id = "quantityRemaining">Quantity Remaining: {singleProduct[0].quantity}</span> </h5>
              </div>
            <div>
              <img src = {singleProduct[0].imageUrl} width = {200} height = {200}/>
            </div>
            <div>
              <button
                className="btn btn-primary btn-lg">
                  Add to Cart <span></span>
                <span value = "addToCartButton" className="glyphicon glyphicon-plus"></span>
              </button>
            </div>
          </div>
          }
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

// you could put your filter for selectedProduct in your mapState --KM

const mapDispatchToProps = {fetchSingleProduct}
const SingleProductContainer = connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
export default SingleProductContainer
