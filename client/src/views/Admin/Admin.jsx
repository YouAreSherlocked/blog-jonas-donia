import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { operations, selectors } from '../../redux';
import * as fetch from '../../services';

class Admin extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    }
  }

  async componentDidMount() {
    const countries = await fetch.countries.getAllCountries()
    this.setState({
      ...countries
    })
  }

  async handleDeleteBtn(id) {
    await fetch.countries.deleteCountry(id);
  }

  render() {
    console.log(this.state.countries)
    return(
      <Fragment>
        <a href="/"><p className="go-home">Home</p></a>
        <section id="admin">
          <h2>Admin Section</h2>
          <h3>Countries</h3>
          <table>
            <thead>
              <tr>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              { this.state.countries ? this.state.countries.map((country, i) => (
                <tr key={i}>
                  <td>{ country.name }</td>
                  <td>
                    <p className="link" onClick={() => this.handleDeleteBtn(country._id)}>Delete</p>
                  </td>
                </tr>
              )) : <tr><td>No countries yet</td></tr>}
              <tr>
                <td>
                <form action="/countries" method="POST">
                  <input type="text" name="name" placeholder="New Country" />
                  <button className="arrow-input-wrapper" type="submit">
                    <img className="arrow-input" src={require("../../assets/img/portfolio_down_green.svg")} alt="save new country" />
                  </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);