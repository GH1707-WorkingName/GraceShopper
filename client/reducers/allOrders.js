import axios from 'axios';
import {setOrder, addItem } from './currentOrder'

// ACTION TYPES
const CREATE_ORDER = 'CREATE_ORDER'; 

// ACTION CREATORS
export const createOrder = newOrder => {
  return {type: CREATE_ORDER, newOrder}
};

// REDUCER
export default (orders=[], action) => {
  switch(action.type){
    case CREATE_ORDER: 
      return [...orders, action.newOrder];
    default:
      return orders 
  }
}

// THUNK 
export const createNewOrder = (item) => {
  return dispatch => {
    return axios.post('/api/orders')
      .then(res=>res.data)
      .then(newOrder=> {
        dispatch(createOrder(newOrder));
        dispatch(setOrder(newOrder.id))
        return newOrder;
      })
      .then(newOrder=> {
        dispatch(addItem(item, newOrder.id));
      })
      .catch(console.error);
  }
}
