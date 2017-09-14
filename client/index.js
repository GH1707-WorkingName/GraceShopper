import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import AllProducts from './components/AllProducts';
import {fetchAllProducts} from './reducers';
import store from './store';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cart from './Cart';
// import navbar, footer, all Components

export default class Index extends Component {
  componentDidMount() {
    store.dispatch(fetchAllProducts())
  }

  render() {
    return (
      <div>
        <Navbar />
        <Banner />
          <Switch>
            <Route exact path="/" component={AllProducts} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        <Footer />
      </div>
    )
  }
}
