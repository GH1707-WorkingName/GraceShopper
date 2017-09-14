import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import AllProducts from './components/AllProducts';
import {fetchAllProducts} from './reducers';
import store from './store';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
<<<<<<< HEAD
import Banner from './components/Banner'
=======
import Cart from './components/Cart'

>>>>>>> 0e2ffae702e943522ce1a9b85daf1fb3c6933781
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
            <Route exact path="/cart" component={Cart} />
          </Switch>
        <Footer />
      </div>
    )
  }
}
