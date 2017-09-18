import { combineReducers } from 'redux';
import allProductsReducer from './allProducts';
import currentOrder from './currentOrder';
import user from './user';
import error from './error';
import filterCategoryInput from './filterCategoryInput'

export default combineReducers({
  products: allProductsReducer,
  currentOrder,
  user,
  error,
  filterCategoryInput
})

export * from './allProducts'
export * from './currentOrder'
export * from './user'
export * from './error'
export * from './filterCategoryInput'
