import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../reducers'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      emailInput: '',
      passwordInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    //HANDLE VALIDATIONS?
    switch (evt.target.name) {
      case 'email':
        this.setState({emailInput: evt.target.value, dirty: true})
        break;
      case 'password':
        this.setState({passwordInput: evt.target.value, dirty: true})
        break;
      default:
        break;
    }
  }

  render() {
    const { emailInput, passwordInput} = this.state

    return (
      <div>
        <form name="login-form" onSubmit={(evt) => this.props.handleSubmit(evt, emailInput, passwordInput)}>
          <div>
            <label>Email: </label>
            <input type="text" name="email" value={emailInput} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Password: </label>
            <input type="text" name="password" value={passwordInput} onChange={this.handleChange} required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
            {
              this.props.error &&
                <div>ERROR: Incorrect password or email.</div>
            }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (evt, email, password) => {
      evt.preventDefault()
      dispatch(login({email, password}, ownProps.history))
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginContainer
