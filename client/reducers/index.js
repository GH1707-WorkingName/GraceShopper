import { combineReducers } from 'redux';
import allProductsReducer from './allProducts';
import currentOrder from './currentOrder';
import allOrders from './allOrders'
import user from './user';
import error from './error';
import searchInput from './search'
import account from './accountInfo'

export default combineReducers({
  products: allProductsReducer,
  currentOrder,
  allOrders,
  user,
  error,
  account,
  searchInput
})

export * from './allProducts'
export * from './currentOrder'
export * from './allOrders'
export * from './user'
export * from './error'
export * from './accountInfo'
export * from './search'

