import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Banner from './Banner'
import Grid from 'material-ui/Grid';


export class AllProducts extends Component {
  state = {
    spacing: '16'
  }
  render() {
    const { allProducts, searchInput } = this.props
    const filteredProducts = searchInput.length ? allProducts.filter(product => product.title.toLowerCase().match(searchInput.toLowerCase())) : allProducts
    const { spacing } = this.state;
    const styles = {
      root: {
        flexGrow:1,
      },
      image: {
        height: "450px"
      },
      control: {
        padding: theme.spacing.unit *2
      }
    };
    
    return (
      <div>
        <Banner />
        <Grid container className={styles.root}>
          <Grid item lg={12}>
            <Grid container className={classes.demo} justify="center" spacing={8}>
            {
              filteredProducts &&
              filteredProducts.map(product => (
                <Grid className={styles.demo} 
                  key={product.id}
                >
                  <NavLink to={`/products/${product.id}`}>
                    <img src={product.imageUrl} className={styles.image} />
                  </NavLink>
                </Grid>
            ))}
          </Grid>
        </Grid>
        </Grid>
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


