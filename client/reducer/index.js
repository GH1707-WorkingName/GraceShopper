import { combineReducers } from 'redux';
import allProductsReducer from './allProducts'

export default combineReducers({
  allProducts: allProductsReducer
})

export * from './allProducts'
