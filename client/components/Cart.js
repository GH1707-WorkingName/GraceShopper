import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { deleteItem } from '../reducers'

export class Cart extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editMode: false
    }
    this.handleChangeQuant = this.handleChangeQuant.bind(this);
  }

  render(){
    const order = [
      {
        id: 1,
        name: `ProductName`,
        quantity: 2,
        price: '2343.99',
        imageUrl: `http://www.sanmateoinsider.org/wp-content/uploads/2016/10/Haunted-House.jpg`,
      },  {
        id: 2,
        name: `ProductName`,
        quantity: 3,
        price: '2343.99',
        imageUrl: `http://www.sanmateoinsider.org/wp-content/uploads/2016/10/Haunted-House.jpg`,
      }
    ];

    const handleSubmitUpdate = (event) => {
      this.setState({editMode:true});
      return  (this.props.deleteItem(this.props.order.id, evt.target.value))
    }

    return (
      <div className='container'>
        <div><h1>Shopping Cart</h1></div>
        <table className='table'>
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
                      <NavLink to={`/products/${item.id}`} >
                      <img src={ item.imageUrl } />
                      </NavLink>
                      <span>{ item.name }</span>
                    </div>
                  </td>
                  <td>
                    <form
                      onSubmit={this.handleSubmitUpdate}
                    >
                    <input
                    type="number"
                    name="item quantity"
                    defaultValue={item.quantity}
                    onChange={this.handleChangeQuant}
                    />
                    {
                      this.state.editMode ?
                      <button type="submit">Update</button> : null
                    }
                    </form>
                  </td>
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

  handleChangeQuant(){
    return this.setState({
      editMode: true
    })
  };

  handleSubmitUpdate(event) {
    this.setState({editMode:true});
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
