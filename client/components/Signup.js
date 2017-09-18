import React, {Component} from 'react';
import { connect } from 'react-redux';
import { signup } from '../reducers'
import store from '../store'
import {setError} from '../reducers'

export class Signup extends Component {
  constructor() {
    super()
    this.state = {
      firstNameInput: '',
      lastNameInput: '',
      emailInput: '',
      passwordInput: '',
      dirty: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillUnmount() {
    store.dispatch(setError({}))
  }

  handleChange(evt) {
    //HANDLE VALIDATIONS?
    switch (evt.target.name) {
      case 'firstName':
        this.setState({firstNameInput: evt.target.value, dirty: true})
        break;
      case 'lastName':
        this.setState({lastNameInput: evt.target.value, dirty: true})
        break;
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

  // can use setState without switch case --> this.setState({[evt.target.name]: evt.target.value}) --KM

  render() {
    const { emailInput, passwordInput, firstNameInput, lastNameInput, dirty } = this.state
    let formWarning = ''

    if (dirty && passwordInput.length !== 0 && passwordInput.length < 3 && passwordInput.length > 20) {
      formWarning = 'Password must be at least 3 characters and no more than 20 characters'
    }

    return (
      <div>
        <form name="signup-form" onSubmit={(evt) => this.props.handleSubmit(evt, emailInput, passwordInput, firstNameInput, lastNameInput)}>
          <div>
            <label>First Name: </label>
            <input type="text" name="firstName" onChange={this.handleChange} value={firstNameInput} required />
          </div>
          <div>
            <label>Last Name: </label>
            <input type="text" name="lastName" value={lastNameInput} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Email: </label>
            <input type="text" name="email" value={emailInput} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Password: </label>
            <input type="text" name="password" value={passwordInput} onChange={this.handleChange} required />
            {
              formWarning !== '' &&
                <p>{formWarning}</p>
            }
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
            {
              this.props.error.status &&
                <div>ERROR: {this.props.error.message}</div>
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
    handleSubmit: (evt, email, password, firstName, lastName) => {
      evt.preventDefault()
      dispatch(signup({email, password, firstName, lastName}, ownProps.history))
    }
  }
}

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup)
export default SignupContainer
