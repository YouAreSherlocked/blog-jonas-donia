import React, { Component } from 'react';
import * as fetch from '../../services';

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await fetch.posts.getAllPosts()
    console.log(posts)
    this.setState({
      ...posts
    })
  }

  convertDateFormat(date) {
    date = new Date(date);
    return date ? date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() : '-'
  }

  render() {
    return(
      this.state.posts ? 
        this.state.posts.map((post, i) => (
          <div className="post" key={i}>
            <p className="post-date">{ this.convertDateFormat(post.created_at) }</p>
            <h3>{ post.title }</h3>
            <img alt="Impression" src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fd2v9y0dukr6mq2.cloudfront.net%2Fvideo%2Fthumbnail%2F3dS7uFF%2Fmexico-beautiful-jungle-forest-path-nature-5k-hd-stock-video-footage_hwzk5h0xl_thumbnail-full01.png&f=1" />
            <p>{ post.text }</p>
          </div>
        ))
      : <p>Posts are loading</p>
    );
  }
}

export default Post;