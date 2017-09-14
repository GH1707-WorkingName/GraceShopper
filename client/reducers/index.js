import { combineReducers } from 'redux';
import allProductsReducer from './allProducts'

export default combineReducers({
  products: allProductsReducer
})

export * from './allProducts'
