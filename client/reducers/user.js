import axios from 'axios';
import {setError} from './index'

// ACTION TYPES
const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'

// ACTION CREATORS
export const setUser = user => {
  return {type: SET_USER, user}
}
export const removeUser = () => {
  return {type: REMOVE_USER}
}

// REDUCER
export default (user = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    case REMOVE_USER:
      return {}
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

export const login = (credentials, history) => {
  return dispatch => {
    return axios.post('/auth/login', credentials)
    .then(res => res.data)
    .then(user => {
      dispatch(setUser(user))
      console.log(user)
    })
    .then(() => {
      console.log('LOGGED IN')
      dispatch(setError(true))
      history.push('/')
    })
    .catch(() => dispatch(setError(true)))
  }
}

export const logout = () => {
  return dispatch => {
    return axios.post('/auth/logout')
      .then(() => dispatch(removeUser()))
      .then(() => history.push('/'))
      .catch(console.error)
  }
}
