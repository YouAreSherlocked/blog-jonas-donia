import React, { Component } from 'react';

class Post extends Component {
  render() {
    return(
      <div className="post">
        <p className="post-date">16.07.2019</p>
        <h3>Post Title</h3>
        <img alt="Impression" src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fd2v9y0dukr6mq2.cloudfront.net%2Fvideo%2Fthumbnail%2F3dS7uFF%2Fmexico-beautiful-jungle-forest-path-nature-5k-hd-stock-video-footage_hwzk5h0xl_thumbnail-full01.png&f=1" />
        <p>Lorem Ipsum Dolores.</p>
        </div>
    );
  }
}

export default Post;