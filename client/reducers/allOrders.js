import axios from 'axios';

// ACTION TYPES
CREATE_ORDER = 'CREATE_ORDER'; 

// ACTION CREATORS
export const createOrder = newOrder => (
  {type:CREATE_ORDER, newOrder}
);

// REDUCER
export default (orders=[], action) => {
  switch(action.type){
    case CREATE_ORDER: return [...orders, action.newOrder]
  }
}

// THUNK 
export const createNewOrder = productId => {
  return dispatch => {
    return axios.post('/api/orders')
      .then(newOrder => {
        dispatch(createOrder(newOrder.data))
      })
      .catch(console.error);
  }
}
