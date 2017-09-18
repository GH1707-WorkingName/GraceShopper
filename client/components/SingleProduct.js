import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store'
import Banner from './Banner'
import {fetchSingleProduct} from '../reducers/singleProduct'
import {createNewOrder} from '../reducers/allOrders'

class SingleProduct extends Component {
  constructor(props){
    super(props)

    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick(dispatch){
  //   //check if there is already a current order set on the store
  //   if(!this.props.currentOrder){
  //     dispatch(createNewOrder)
  //   }

    //else dispatch Create New Order
    //set New Order as Current Order
  // }

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
                className="btn btn-primary btn-lg"
                onClick = {this.props.handleClick}
                > 
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
const mapDispatchToProps = function(dispatch, ownProps){
  return {
    handleClick(evt){
      console.log("OWNPROPS RIGHT NOW", ownProps)
      if (!ownProps.currentOrder){
        dispatch(createNewOrder())
      }
      
    }
  }
}


const SingleProductContainer = connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
export default SingleProductContainer