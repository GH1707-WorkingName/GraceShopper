import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Cart = () => {
  // delete below const when  order from mapStateToProps is accessible
  const order = [
    {
      id: 1,
      name: `ProductName`,
      quantity: 2,
      price: '2343.99', 
      imgUrl: `http://www.sanmateoinsider.org/wp-content/uploads/2016/10/Haunted-House.jpg`,
    }
  ]
  return ( 
    <div>
    <div><h1>Shopping Cart</h1></div>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th> </th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {
          order && order.map( item => (
            <tr key={item.id}>
              <td>
                <div>
                  <Link to={`/products/${item.id}`} />
                  <img src={ item.imgUrl } />
                  <span>{ item.name }</span>
                </div>
              </td>
              <td>{ item.quantity }</td>
              <td>{ item.price }</td>
              <td> 
                { 
                  // CALCULATED TOTAL
                }
              </td>
              <td> 
                <button> X </button>
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
