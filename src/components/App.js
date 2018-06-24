import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Posts from './Posts'
import Users from './Users'
import Post from './Post'
class App extends Component {
  state = {
    user: null,
    loading: false
  }

  login = async () => {
    const res = await axios.get('/users')
    return res.data[0]
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const user = await this.login()
    this.setState({ user, loading: false })
  }

  render () {
    const { user, loading } = this.state
    if (loading) return <h1>Loading...</h1>
    if (!user) return (<h1>Not logged in.</h1>)

    return (
      <Router>
        <div>
          <h1>Welcome {this.state.user.name}!</h1>
          <p><Link to='/posts'>Click here to see all the blog posts!</Link></p>
          <p><Link to='/users'>Click here to see all the users!</Link></p>
          <Route path='/posts' component={Posts} />
          <Route path='/posts/:post_id' component={Post} />
          <Route path='/users' component={Users} />
        </div>
      </Router>
    )
  }
}

export default App
