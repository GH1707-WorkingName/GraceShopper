import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
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
          <span className="glyphicon glyphicon-home pull-right white"></span>
        </Link>
        <Link 
          to="/signup"
          className="pull-right">
          <button type="button" className="btn btn-default btn-sm">
            Sign Up
          </button>
        </Link>
        <Link 
          to="/login"
          className="pull-right">
          <button type="button" className="btn btn-default btn-sm">
            Login
          </button>
        </Link>
      </h1>
    </nav>
  )
}
