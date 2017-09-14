import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Cart = ({order}) => {
    return ( 
      <div>
      <div><h1>Shopping Cart</h1></div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th> </th>
            <th> </th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            order && order.map( item => (
              <tr key={item.id}>
                <td>
                  <div>
                    <button> X </button>
                    <Link to={`/products/${item.id}`} />
                    <img src={ item.imgUrl } />
                  </div>
                </td>
                <td>{ item.name }</td>
                <td>{ item.quantity }</td>
                <td>{ item.price }</td>
                <td> 
                  { 
                    // CALCULATED TOTAL
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link to="/checkout">
      <button>Checkout</button>
      </Link>
    </div>
  )
} 

const mapStateToProps = state => {
  return {
    order:state.currentOrder
  }
} 

const CartContainer = connect(mapStateToProps)(Cart)

export default CartContainer;
