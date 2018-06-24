import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const response = await axios.get('/users')
    this.setState({ users: response.data })
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.state.users.map(user => (
          <div>
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    )
  }
}

export default Users
