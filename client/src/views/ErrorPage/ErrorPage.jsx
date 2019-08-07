import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../css/index.css';

class ErrorPage extends Component {

  render = () => {
    return (
      <section id="error">
        <div>
          <h2>404</h2>
          <h2>Page not found</h2>
          <Link to="/">
            <p>{'<'} Home</p>
          </Link>
        </div>  
      </section>
    );
  };

}

export default withRouter(ErrorPage);