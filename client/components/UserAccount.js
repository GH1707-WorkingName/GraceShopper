import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store, { updateAccountThunk, deleteUserThunk } from '../store';

class UserAccount extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      address: event.target.address.value
    }
    this.props.handleUpdateUser(user)
  }


  render() {
    const { user } = this.props

    return (
    <div>
      <form onSubmit = {this.handleSubmit}>
        <div>
          <div>
            <label>First Name</label>
            <input type = "text" name= "firstName" defaultValue = {user.firstName}></input>
          </div>
          <div>
            <label>Last Name</label>
            <input type = "text" name= "lastName" defaultValue = {user.lastName}></input>
          </div>
          <div>
            <label>Email</label>
            <input type = "text" name= "email" defaultValue = {user.email}></input>
          </div>
          <div>
            <label>Address</label>
            <input type = "text" name= "address" defaultValue = {user.address}></input>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">Update Account</button>
        </div>
        <div className="form-group">
          <button onClick = {this.props.handleDeleteAccount} className="btn btn-default">Delete User</button>
        </div>
      </form>
  </div>
    )
  }

}

export const mapStateToProps = state => {
  return {
    user: state.account
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleUpdateUser(updatedUser) {
      dispatch(updateAccountThunk(updatedUser))
    },
    handleDeleteAccount() {
      dispatch(deleteUserThunk(ownProps.history))
    }
  }
}

const UserAccountContainer = connect(mapStateToProps, mapDispatchToProps)(UserAccount)
export default UserAccountContainer