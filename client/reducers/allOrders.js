import axios from 'axios';
import {setOrder} from './currentOrder'

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
export const createNewOrder = () => {
  return dispatch => {
    return axios.post('/api/orders')
      .then(res=>res.data)
      .then(newOrder=> {
        dispatch(createOrder(newOrder));
        dispatch(setOrder(newOrder))
      })
      .catch(console.error);
  }
}
