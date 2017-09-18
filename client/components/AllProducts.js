import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Banner from './Banner'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';


export class AllProducts extends Component {
  render() {
    const { allProducts, searchInput } = this.props
    const filteredProducts = searchInput.length ? allProducts.filter(product => product.title.toLowerCase().match(searchInput.toLowerCase())) : allProducts

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 1000,
        height: 950,
        overflowY: 'auto',
      },
    };

    return (
      <div>
        <Banner />
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
            <Subheader>Experiences</Subheader>
            {
              filteredProducts &&
              filteredProducts.map(product => (
                <GridTile 
                  key={product.id}
                  title={product.title}
                >
                  <NavLink to={`/products/${product.id}`}>
                    <img src={product.imageUrl} />
                  </NavLink>
                </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    )
  }
}


export const mapStateToProps = state => {
  return {
    allProducts: state.products,
    searchInput: state.searchInput
  }
}

const AllProductsContainer = connect(mapStateToProps)(AllProducts)
export default AllProductsContainer


