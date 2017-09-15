import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItem } from '../reducers'

export class Cart extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    const order = [
      {
        id: 1,
        name: `ProductName`,
        quantity: 2,
        price: '2343.99', 
        imageUrl: `http://www.sanmateoinsider.org/wp-content/uploads/2016/10/Haunted-House.jpg`,
      }
    ]

    return ( 
      <div>
        <div><h1>Shopping Cart</h1></div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
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
                      <img src={ item.imageUrl } />
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
                    <button
                      onClick={(evt) => (this.props.deleteItem(this.props.order.id, evt.target.value))}
                      value={item.id}
                      > X 
                      </button>
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>
      <Link to="/checkout">
        <button>Checkout
        </button>
      </Link>
    </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    order:state.currentOrder
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: function(orderId, itemId){
      dispatch(deleteItem(orderId, itemId));
    }
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartContainer;
