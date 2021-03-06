import { combineReducers } from 'redux';
import products from './allProducts';
import currentOrder from './currentOrder';
import allOrders from './allOrders'
import user from './user';
import error from './error';
import searchInput from './search'

export default combineReducers({
  products,
  currentOrder,
  allOrders,
  user,
  error,
  searchInput
})

export * from './allProducts'
export * from './currentOrder'
export * from './allOrders'
export * from './user'
export * from './error'
export * from './search'

