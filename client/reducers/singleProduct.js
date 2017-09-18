import axios from 'axios';

// ACTION TYPES
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';

// ACTION CREATORS
export const getSingleProduct = singleProduct => {
  return {type: GET_SINGLE_PRODUCT, singleProduct};
}

// REDUCER
export default (selectedProduct = [], action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.singleProduct
    default:
      return selectedProduct
  }
}

//THUNK
export const fetchSingleProduct = (id) => {
  return dispatch => {
    return axios.get(`/api/products/${id}`)
      .then(res => res.data)
      .then(product => {
        dispatch(getSingleProduct(product))
      })
      .catch(console.error)
  }
}
