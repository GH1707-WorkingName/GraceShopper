import axios from 'axios';

// ACTION TYPES
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

// ACTION CREATORS
export const getAllProducts = allProducts => {
  return {type: GET_ALL_PRODUCTS, allProducts};
}

// REDUCER
export default (products = [], action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.allProducts
    default:
      return products
  }
}

//THUNK
export const fetchAllProducts = () => {
  return dispatch => {
    return axios.get('/api/products')
      .then(res => res.data)
      .then(allProducts => {
        dispatch(getAllProducts(allProducts))
      })
      .catch(console.error)
  }
}
