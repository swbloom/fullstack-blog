import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Posts extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    // get all posts from the database
    const response = await axios.get('/posts')
    // store the posts in state
    this.setState({ posts: response.data })
  }
  render () {
    return (
      <div>
        <h2>Posts</h2>
        {this.state.posts.map(post => (
          <p>
             <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </p>
        ))}
      </div>
    )
  }
}

export default Posts
