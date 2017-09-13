import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = props => {
  const orderItems = props.currPendingOrder; 
    return ( 
      <div>
      <div><h1>Shopping Cart</h1></div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th></th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            orderItems && orderItems.map( item => (
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
                <td>( { item.name } * { item.quantity } )</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <table>
       { //  PUT total here and buttons to go to payment options 
        }
      </table>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

