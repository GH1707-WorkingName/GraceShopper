import axios from 'axios';
import {setError} from './index'

// ACTION TYPES
const SET_USER = 'SET_USER'

// ACTION CREATORS
export const setUser = user => {
  return {type: SET_USER, user}
}

// REDUCER
export default (user = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    default:
      return user
  }
}

//THUNK


export const signup = (credentials, history) => {
  return dispatch => {
    return axios.post('/auth/signup', credentials)
      .then(res => res.data)
      .then(user => dispatch(setUser(user)))
      .then(() => {
        dispatch(setError(true))
        history.push('/')
      })
      .catch((err) => {
        switch (err.response.status) {
          case 401:
            return dispatch(setError({status: 401, message: "User already exists. Please use login portal."}))
          case 500:
            return dispatch(setError({status: 500, message: "Please make sure all inputs are correct and try again."}))
          default:
            return dispatch(setError({status: 500, message: "Try again."}))
        }
      })
    }
}

