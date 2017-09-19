import axios from 'axios';

// ACTION TYPES
const SET_ORDER = 'SET_ORDER';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';

// ACTION CREATORS
export const setOrder = order => {
  return {type: SET_ORDER, order}
}

const addNewItem = item => {
  return {type: ADD_ITEM, item}
}

const deleteEntireItem = itemId => {
  return {type:DELETE_ITEM, itemId}
}

const updateExistingItem = item => {
  return {type: UPDATE_ITEM, item}
}


// REDUCER
export default (currentOrder={}, action) => {
  switch(action.type) {
    case SET_ORDER: 
      let newOrder = action.order;
      newOrder.items = []
      return newOrder;  
    case ADD_ITEM: 
      let items = [...currentOrder.items, action.item]
      return Object.assign({}, currentOrder, {items: items});
    case DELETE_ITEM:
      return currentOrder.items.filter(item => item.id !== action.itemId);
    case UPDATE_ITEM:
      return currentOrder.items.map(item => (item.id === action.item.id ? action.item : item));
    default: return currentOrder; 
  }
}

//THUNK
//This thunk is not currently in use, but should be used when a user logs in 
export const setCurrentOrder = order => dispatch => {
  return axios.get(`/api/orders`, userId)
    .then(res => res.data)
    .then(order => dispatch(setOrder(order)))
    .catch(console.error)
}

export const deleteItem = (orderId, itemId) => dispatch =>{
  return axios.delete(`/api/orders/${orderId}/${itemId}`)
  .then(dispatch(deleteEntireItem(itemId)))
  .catch(console.error)
}

export const addItem = (product, orderId) => dispatch => {
  console.log("PRODUCT IN THE THUNK!", product)
  return axios.put(`/api/orders/${orderId}`, product)
    .then(res => res.data)
    .then(order => {
      return dispatch(addNewItem(product))
    })
    .catch(console.error);
}

export const updateItem = (orderId, itemId, quantity) =>dispatch => {
  return axios.put(`/api/orders/${orderId}/${itemId}`, quantity)
  .then(res =>  res.data)
  .then(item => dispatch(updateExistingItem(item)))
  .catch(console.error)
}

  
