import { combineReducers } from 'redux';
import allProductsReducer from './allProducts';
import currentOrder from './currentOrder';

export default combineReducers({
  products: allProductsReducer,
  currentOrder: currentOrder
})

export * from './allProducts'
export * from './currentOrder'
