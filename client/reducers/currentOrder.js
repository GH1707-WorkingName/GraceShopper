import axios from 'axios';

// ACTION TYPES 
const CREATE_ORDER = 'CREATE_ORDER';
const SET_ORDER = 'SET_ORDER';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';

// ACTION CREATORS
const createNewOrder = (newOrder, item) => {
  return {type: CREATE_ORDER, newOrder, item}
}

const setExistingOrder = order => {
  return {type: SET_ORDER, existingOrder}
}

const addNewItemToOrder = item => {
  return {type: ADD_ITEM, item}
}

const deleteItemFromOrder = item => {
  return {type:DELETE_ITEM, itemId}
}

const updateExistingItem = item => {
  return {type: UPDATE_ITEM, item}
}


// REDUCER
export default (currentOrder = [], action) => {
  switch(action.type) {
    case CREATE_ORDER: 
      return action.newOrder;
    case SET_ORDER: 
      return action.existingOrder; 
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
// where item is used to Order.create({where: products: [item]});
export const initNewOrderWithItem = item => dispatch => {
  axios.post('/api/orders', item)
    .then(res => dispatch(create(res.data)))
    .catch(console.error)
}
  