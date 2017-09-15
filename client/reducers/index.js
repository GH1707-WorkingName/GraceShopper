import { combineReducers } from 'redux';
<<<<<<< HEAD
import allProductsReducer from './allProducts'

export default combineReducers({
  products: allProductsReducer
})

export * from './allProducts'
=======
import allProductsReducer from './allProducts';
import currentOrder from './currentOrder';

export default combineReducers({
  products: allProductsReducer,
  currentOrder: currentOrder
})

export * from './allProducts'
export * from './currentOrder'
>>>>>>> f01b612277fd861339ac1bf8cd1f70ab5de95b14
