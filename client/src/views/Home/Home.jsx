import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Post from '../Post/Post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations, selectors } from '../../redux';

class Home extends Component {

  render() {
    return(
      <Fragment>
        <Header></Header>
        <Welcome country={this.props.country}></Welcome>
        <section id="posts">
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  country: selectors.getCountry(state.mainState)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);