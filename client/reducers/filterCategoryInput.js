
//Action Type
const SET_FILTER_CATEGORY_INPUT = 'SET_FILTER_CATEGORY_INPUT'

//Action creator
export const setFilterCategoryInput = (input) => {
  return {type: SET_FILTER_CATEGORY_INPUT, input}
}

export default (filterCategoryInput = [], action) => {
  switch (action.type) {
    case SET_FILTER_CATEGORY_INPUT:
      return action.input
    default:
      return filterCategoryInput
  }
}
