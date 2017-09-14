import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import AllProducts from './components/AllProducts';
import {fetchAllProducts} from './reducers';
import store from './store';
<<<<<<< HEAD
import Footer from './components/Footer'
import Navbar from './components/Navbar'

=======
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import { Button } from 'react-bootstrap';
>>>>>>> 1ba2adde77d9d5877a3ecab29fb6467ac1cb077b
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
          </Switch>
        <Footer />
      </div>
    )
  }
}
