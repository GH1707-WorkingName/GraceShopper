import React, {Component} from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {setFilterCatergoryInput} from '../reducers';

export class FilterByCategory extends Component {
  render() {
    const {filterCategoryInput} = this.props
    // const menuItems = (values) {
    //   return names.map((name) => (
    //     <MenuItem
    //       key={name}
    //       insetChildren={true}
    //       checked={values && values.indexOf(name) > -1}
    //       value={name}
    //       primaryText={name}
    //     />
    //   ));
    // }
    return (
      <SelectField
        multiple={true}
        hintText="Select a name"
        value={values}
        onChange={this.handleChange}>
        {this.menuItems(values)}
      </SelectField>
    )
  }
}

const mapStateToProps = state => {
  return {
    filterCategoryInput: state.filterCategoryInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
      handleChange: () => {

      }
    }
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
export default SearchContainer

