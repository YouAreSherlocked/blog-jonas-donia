import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations, selectors } from '../../redux';

class Admin extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      countries: [
        "Switzerland",
        "USA",
        "Mexico",
        "Peru"
      ]
    }
  }

  render() {
    return(
      <Fragment>
        <a href="/">Home</a>
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
              { this.state.countries.map((country, i) => (
                <tr key={i}>
                  <td>{ country }</td>
                </tr>
              ))}
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