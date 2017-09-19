import { combineReducers } from 'redux';
import products from './allProducts';
import currentOrder from './currentOrder';
import user from './user';
import error from './error';
import searchInput from './search'

export default combineReducers({
  products,
  currentOrder,
  user,
  error,
  searchInput
})

export * from './allProducts'
export * from './currentOrder'
export * from './user'
export * from './error'
export * from './search'
