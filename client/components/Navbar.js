import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'
import { connect } from 'react-redux';
import history from '../history';
import { logout } from '../reducers';

export const Navbar = ({user, handleLogout}) => {
  return (
    <nav className="navbar navbar-inverse white">
        <h3>REALITY BYTES</h3>
        <div>
          <Link to="/cart">
            <span className="glyphicon glyphicon-shopping-cart white"></span>
          </Link>
          <Link to="/profile">
            <span className="glyphicon glyphicon-user white"></span>
          </Link>
          <Link to="/">
            <span className="glyphicon glyphicon-home white"></span>
          </Link>
          </div>
          {
            user.id ? (
            <div>
              <Link to="/logout" className="pull-right">
                <button type="button" className="btn btn-default btn-sm" onClick={handleLogout}>
                  Logout
                </button>
              </Link>
            </div>) : (
            <div>
              <Link to="/signup" className="pull-right">
                <button type="button" className="btn btn-default btn-sm">
                  Sign Up
                </button>
              </Link>
              <Link to="/login" className="pull-right">
                <button type="button" className="btn btn-default btn-sm">
                  Login
                </button>
              </Link>
            </div>
          )
        }
      <Search />
    </nav>
  )
}

export const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => {
      dispatch(logout())
      history.push('/')
    }
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;

