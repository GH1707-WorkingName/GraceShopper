import axios from 'axios';

// ACTION TYPES
const SET_ORDER = 'SET_ORDER';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';

// ACTION CREATORS
const setOrder = order => {
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
export default (currentOrder = [], action) => {
  switch (action.type) {
    case SET_ORDER:
      return action.order;
    case ADD_ITEM:
      return [action.item, ...currentOrder];
    case DELETE_ITEM:
      return currentOrder.filter(item => item.id !== action.itemId);
    case UPDATE_ITEM:
      return currentOrder.map(item => (item.id === action.item.id ? action.item : item));
    default: return currentOrder;
  }
}

//THUNK
export const setCurrentOrder = order => dispatch => {
  return axios.post(`/api/orders/${order.id}`)
    .then(res => res.data)
    .then(order => dispatch(setOrder(order)))
    .catch(console.error)
}

export const deleteItem = (orderId, itemId) => dispatch =>{
  return axios.delete(`/api/orders/${orderId}/${itemId}`)
  .catch(console.error)
}

// make sure to update the actual store when you delete an order --KM
// we can either (1) update the currentOrder store with a new item order object with a new quantity or (2) just update the quantity on the existing item see `UPDATE_ITEM` action, matches option (1)
// get rid of comment above --KM

export const updateItem = (orderId, itemId, quantity) =>dispatch => {
  return axios.put(`/api/orders/${orderId}/${itemId}`, quantity)
  .then(res =>  res.data)
  .then(item => dispatch(updateExistingItem(item)))
  .catch(console.error)
}
