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
      .catch(() => dispatch(setError(true)))
    }
}

