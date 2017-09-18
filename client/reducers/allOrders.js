import axios from 'axios';

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
  console.log("IM IN THE THUNK!")
  return dispatch => {
    console.log("READY TO DISPATCH")
    return axios.post('/api/orders')
      .then(res=>res.data)
      .then(newOrder=> {
        console.log("NEW ORDER", newOrder)
        dispatch(createOrder(newOrder))
      })
      .catch(console.error);
  }
}
