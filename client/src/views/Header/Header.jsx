import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <nav>
        <a href="/new">New Post</a>
        <a href="/admin">Admin</a>
        <a href="/login">Login</a>
      </nav>
    );
  }
}

export default Header;