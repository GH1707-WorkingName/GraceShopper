import axios from 'axios';
import {setError} from './index'

// ACTION TYPES
const GET_USER = 'GET_USER';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const DELETE_USER = 'DELETE_USER';
const SET_USER = 'SET_USER'

// ACTION CREATORS
export const getUserInfo = userInfo => {
  return {type: GET_USER, userInfo}
}

export const updateUserInfo = updatedUser => {
  return {type: UPDATE_USER_INFO, updatedUser}
}

export const deleteUser = () => {
  return {type: DELETE_USER, user}
}

export const setUser = user => {
  return {type: SET_USER, user}
}

// REDUCER
export default (user = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.userInfo
    case UPDATE_USER_INFO:
      return Object.assign({}, user, action.updatedUser)
    case DELETE_USER:
      return {}
    case SET_USER:
      return action.user
    default:
      return user
  }
}

//THUNK
export const fetchUser = () => {
  return dispatch => {
    return axios.get('/api/account')
      .then(res => res.data)
      .then(user => {
        dispatch(getUserInfo(user))
      })
      .catch(console.error)
  }
}
export const updateAccountThunk = newInfo => {
  return dispatch => {
    return axios.put('/api/account/edit', newInfo)
      .then(res => res.data)
      .then(user => {
        dispatch(updateUserInfo(user))
      })
      .catch(console.error)
  }
}

export const deleteUserThunk = (history) => {
  return dispatch => {
    return axios.put('api/account/delete')
      .then(res => res.data)
      .then(user => {
        dispatch(deleteUser())
        history.push('/')
      })
      .catch(console.error)
  }
}

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