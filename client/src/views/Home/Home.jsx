import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Post from '../Post/Post';

class Home extends Component {
  render() {
    return(
      <Fragment>
        <Header></Header>
        <Welcome></Welcome>
        <section id="posts">
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </section>
      </Fragment>
    );
  }
}

export default Home;