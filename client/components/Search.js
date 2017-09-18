import React from 'react';
import { connect } from 'react-redux';
import { setSearchInput } from '../reducers'

const Search = (props) => {
  return (
    <form name="search">
      <input
        onChange={props.handleChange}
        value={props.searchInput}
        placeholder="Search by name"
        name="searchInput"
      />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    searchInput: state.searchInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: (evt) => {
      dispatch(setSearchInput(evt.target.value))
    }
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
export default SearchContainer
