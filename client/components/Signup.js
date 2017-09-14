import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export props => {
  return (
    <div>
      <form name="signup-form" onSubmit={props.handleSubmit}>
        <div>
          <label>Email: </label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Password: </label>
          <input type="text" name="password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: () => {
      console.log('HELLO')
    }
  }
}

const SignupContainer = connect(mapDispatchToProps)(Signup)
export default SignupContainer
