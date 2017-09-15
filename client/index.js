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

>>>>>>> f01b612277fd861339ac1bf8cd1f70ab5de95b14
// import navbar, footer, all Components

export default class Index extends Component {
  componentDidMount() {
    store.dispatch(fetchAllProducts())
  }

  render() {
    return (
      <div>
        <Navbar />
<<<<<<< HEAD
        <Banner />
          <Switch>
            <Route exact path="/" component={AllProducts} />
=======
          <Switch>
            <Route exact path="/" component={AllProducts} />
            <Route exact path="/cart" component={Cart} />
>>>>>>> f01b612277fd861339ac1bf8cd1f70ab5de95b14
          </Switch>
        <Footer />
      </div>
    )
  }
}
