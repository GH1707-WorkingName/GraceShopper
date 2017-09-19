import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store'
import Banner from './Banner'
import {fetchSingleProduct} from '../reducers/singleProduct'
import {createNewOrder} from '../reducers/allOrders'
import {addItem} from '../reducers/currentOrder'

class SingleProduct extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt){
    if(!this.props.currentOrder){
      this.props.dispatchCreateOrder(evt.target.value);
    }
    else {
      this.props.dispatchAddItem(evt.target.value, this.props.currentOrder.id);
    }
  }
 

  render(){
    const singleProduct = this.props.singleProduct 
    
    return (
      <div>
        <div className = "container">
          { singleProduct && 
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
              {singleProduct[0].description}
            </div>
            <div>
              <button 
                value = {singleProduct[0]}
                className="btn btn-primary btn-lg"
                onClick = {this.handleClick}
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

const mapStateToProps = (state, ownProps) => {
  return {
    singleProduct: state.products.filter((product=> product.id === Number(ownProps.match.params.id))),
    currentOrder: state.currentOrder
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    dispatchCreateOrder(item){
        dispatch(createNewOrder(item))
    },
    dispatchAddItem(item, orderId){
      dispatch(addItem(item, orderId))
    }
  }
}


const SingleProductContainer = connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
export default SingleProductContainer