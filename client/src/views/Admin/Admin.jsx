import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations } from '../../redux';
import * as fetch from '../../services';

class Admin extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    }

    this.handleUpdateBtnCurrentCoutry = this.handleUpdateBtnCurrentCoutry.bind(this);
  }

  async componentDidMount() {
    const countries = await fetch.countries.getAllCountries();
    this.setState({
      ...countries
    })
  }

  async handleDeleteBtn(id) {
    await fetch.countries.deleteCountry(id);
  }

  async handleUpdateBtnCurrentCoutry(e) {
    e.preventDefault();
    let lastCurrent = "";
    this.state.countries.forEach(country => {
      if (country.current) lastCurrent = country.name
    })

    const selected = e.target.elements.country.value

    // Set last current country to current = false
    await fetch.countries.updateCurrentCountry(lastCurrent, false);

    // Set selected country to current = true
    await fetch.countries.updateCurrentCountry(selected, true);

    this.updateCurrentCountryInState(selected);
  }

  async updateCurrentCountryInState(name) {
    this.props.changeCurrentCountry(name);
  }

  render() {
    return(
      <Fragment>
        <a href="/"><p className="go-home">Home</p></a>
        <section id="admin">
          <h2>Admin Section</h2>
          <section className="admin-countries">
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
          <section className="admin-current-country">
            <h3>Current Country</h3>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                </tr>
              </thead>
              <tbody>
                { this.state.countries ? this.state.countries.map((country, i) => (
                  <tr key={i}>
                    { country.current ? <td>{ country.name }</td> : null }
                  </tr>
                )) : <tr><td>No countries yet</td></tr>}
                <tr>
                  <td>
                  <form onSubmit={this.handleUpdateBtnCurrentCoutry}>
                    <select name="country">
                      { this.state.countries.map((country, i) => (
                        <option key={i}>{ country.name }</option>
                      )) }
                    </select>
                    <button className="arrow-input-wrapper" type="submit">
                      <img className="arrow-input" src={require("../../assets/img/portfolio_down_green.svg")} alt="save new country" />
                    </button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
});


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeCurrentCountry: operations.changeCurrentCountry
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);