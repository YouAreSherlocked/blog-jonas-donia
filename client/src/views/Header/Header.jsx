import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <nav>
        <a href="/edit">New Post</a>
        <a href="/login">Login</a>
      </nav>
    );
  }
}

export default Header;