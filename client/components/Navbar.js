import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Navbar = ({user}) => {
  return (
    <nav>
      <h1>REALITY BYTES 
        <Link to="/cart">
          <span className="glyphicon glyphicon-shopping-cart pull-right white"></span>
        </Link>
        <Link to="/profile">
        <span className="glyphicon glyphicon-user pull-right white"></span>
        </Link>
        <Link to="/">
          <span className="glyphicon glyphicon-home white"></span>
        </Link>
        {
          user.id ? (
          <div>
            <Link to="/logout" className="pull-right">
              <button type="button" className="btn btn-default btn-sm">
                Logout
              </button>
            </Link>
          </div>
          ) : (
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
      </h1>
    </nav>
  )
}

export const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer; 

