import React, { Component } from 'react'
import axios from 'axios';

class Post extends Component {
  state = {
    post: {}
  }

  async componentDidMount() {
    const { post_id } = this.props.match.params
    const response = await axios.get(`/posts/${post_id}`)
    this.setState({ post: response.data })
  }

  render() {
    return (
      <pre>
        {JSON.stringify(this.state.post, null, 3)}
      </pre>
    )
  }
}

export default Post
