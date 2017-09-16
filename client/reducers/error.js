import axios from 'axios';

//Action Types
const SET_ERROR = 'SET_ERROR'

//Action Creators
export const setError = (error) => {
  return {
    type: SET_ERROR,
    error
  }
}

//Reducer
export default (error = false, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.error
    default:
      return error
  }
}

//Thunk
