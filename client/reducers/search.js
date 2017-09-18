import axios from 'axios';

//Action Types
const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT'

//Action creator
export const setSearchInput = (input) => {
  return { type: SET_SEARCH_INPUT, input }
}

//Reducer
export default (input = '', action) => {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return action.input
    default:
      return input
  }
}

// look into updating the local state instead of the store for this --FF

