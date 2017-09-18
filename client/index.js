import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import AllProducts from './components/AllProducts';
import {fetchAllProducts} from './reducers';
import store from './store';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Cart from './components/Cart'
import SingleProduct from './components/SingleProduct'


// import navbar, footer, all Components

export default class Index extends Component {
  componentDidMount() {
    store.dispatch(fetchAllProducts())
  }

  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={AllProducts} />
            <Route path='/products/:id' component={SingleProduct}/> 
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        <Footer />
      </div>
    )
  }
}
