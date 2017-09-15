import React, {Component} from 'react';
import { connect } from 'react-redux';


export class Signup extends Component {
  constructor() {
    super()
    this.state = {
      emailInput: '',
      passwordInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    switch (evt.target.name) {
      case 'email':
        this.setState({emailInput: evt.target.value})
        console.log(this.state)
        break;
      case 'password':
        this.setState({passwordInput: evt.target.value})
        console.log(this.state)
        break;
      default:
        break;
    }
  }

  render() {
    const { emailInput, passwordInput } = this.state

    return (
      <div>
        <form name="signup-form" onSubmit={(evt) => this.props.handleSubmit(evt, emailInput, passwordInput)}>
          <div>
            <label>Email: </label>
            <input type="text" name="email" value={emailInput} onChange={this.handleChange} />
          </div>
          <div>
            <label>Password: </label>
            <input type="text" name="password" value={passwordInput} onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (evt) => {
      evt.preventDefault()
      console.log('email', evt.target.email.value, 'password', evt.target.password.value)
      //dispatch
    }
  }
}

const SignupContainer = connect(mapDispatchToProps)(Signup)
export default SignupContainer
