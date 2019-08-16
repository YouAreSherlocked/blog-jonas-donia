import React, { Component, Fragment } from 'react';
import Header from '../Header/Header.jsx';
import Welcome from '../Welcome/Welcome.jsx';
import Post from '../Post/Post.jsx';
import { operations, selectors } from '../../redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetch from '../../services';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    }
  }

  async componentDidMount() {
    const countries = await fetch.countries.getAllCountries();
    this.setState({
      ...countries
    })
    await this.state.countries.forEach(country => {
      if (country.current) this.props.changeCurrentCountry(country.name)
    })
  }

  render() {
    return(
      <Fragment>
        <Header></Header>
        <Welcome country={this.props.currentCountry}></Welcome>
        <section id="posts">
          <Post></Post>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentCountry: selectors.getCurrentCountry(state.mainState)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeCurrentCountry: operations.changeCurrentCountry
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);