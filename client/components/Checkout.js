import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart'

export const Checkout = () => {

  return (
    <div>
      <Cart />
      <h1>Total: {}</h1>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const CheckoutContainer = connect(null, mapDispatchToProps)(Checkout)
export default CheckoutContainer
