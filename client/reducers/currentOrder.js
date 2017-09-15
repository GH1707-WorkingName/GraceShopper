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

const deleteItem = itemId => {
  return {type:DELETE_ITEM, itemId}
}

const updateExistingItem = item => {
  return {type: UPDATE_ITEM, item}
}


// REDUCER
export default (currentOrder = [], action) => {
  switch(action.type) {
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
  axios.post(`/api/orders/${order.id}`)
    .then(res => res.data)
    .then(order => dispatch(setOrder(order)))
    .catch(console.error)
}

export const addItem = item => dispatch => {
  axios.update(`/api/orders/${currentOrder.id}`)
    .then(res => res.data)
    .then(order => dispatch(addNewItem(item)))
    .catch(console.error);
}
  