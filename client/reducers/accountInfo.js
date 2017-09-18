import axios from 'axios';

// ACTION TYPES
const GET_USER_INFO = 'GET_USER_INFO';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const DELETE_USER = 'DELETE_USER';

// ACTION CREATORS
export const getUserInfo = userInfo => {
  return {type: GET_USER_INFO, userInfo};
}
export const updateUserInfo = updatedUser => {
  return {type: UPDATE_USER_INFO, updatedUser}
}

export const deleteUser = () => {
  return {type: DELETE_USER, user}
}

// REDUCER
export default (user = {}, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return action.userInfo
      // userInfo isn't the best name --KM
    case UPDATE_USER_INFO:
      return Object.assign({}, user, action.updatedUser)
    case DELETE_USER:
      return {}
    default:
      return user
  }
}

//THUNK
export const fetchUserInfo = () => {
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
