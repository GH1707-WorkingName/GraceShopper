import axios from 'axios';

// ACTION TYPES
const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS';

// ACTION CREATORS
const setAllProducts = allProducts =>{
  return {type: SET_ALL_PRODUCTS, allProducts};
}

// REDUCER
export default allProductsReducer = (products = [], action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return action.allProducts
    default:
      return products
  }
}

//THUNK
export const fetchProducts = () => {
  return dispatch => {
    return axios.get('/api/products')
      .then(allProducts => {
        dispatch(setAllProducts(allProducts))
      })
      .catch(console.error)
  }
}
