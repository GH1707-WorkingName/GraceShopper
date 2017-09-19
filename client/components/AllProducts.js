import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Banner from './Banner'


export class AllProducts extends Component {
  render() {
    const { allProducts, searchInput } = this.props
    const filteredProducts = searchInput.length ? allProducts.filter(product => product.title.toLowerCase().match(searchInput.toLowerCase())) : allProducts

    return (
      <div>
        <Banner />
          {
            filteredProducts &&
            filteredProducts.map(product => {
              return (
                <div className= "container" key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <img src={product.imageUrl} />
                    <h2>{product.title}</h2>
                  </Link>
                </div>
              )
            })
          }
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
