import axios from 'axios';

// ACTION TYPES
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

// ACTION CREATORS
<<<<<<< HEAD
const getAllProducts = allProducts => {
=======
export const getAllProducts = allProducts => {
>>>>>>> f01b612277fd861339ac1bf8cd1f70ab5de95b14
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
