import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectors } from '../../redux';
import * as fetch from '../../services';

class NewPost extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    }

    this.openFileUploader = this.openFileUploader.bind(this);
  }

  async componentDidMount() {
    const countries = await fetch.countries.getAllCountries();
    this.setState({
      ...countries
    })
  }

  openFileUploader() {
    this.refs.fileUploader.click();
  }

  render() {
    return(
      <Fragment>
        <a href="/"><p className="go-home">Home</p></a>
        <section id="new-post">
          <h2>New Post</h2>
          <form method="post" action="/posts">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text"></textarea>
            <label htmlFor="imgs">Images</label>
            <input type="button" value="Upload Images" onClick={this.openFileUploader}/>
            <input type="file" name="img" alt="Post Images" ref="fileUploader" multiple />
            <label htmlFor="country">Country</label>
            { this.state.countries ? 
            <select name="country">
              { this.state.countries.map((country, i) => (
                <option key={i}>{ country.name }</option>
              )) }
            </select>
            : <p>No countries added yet</p> }
            <div className="btn-group">
            <a href="/"><button type="button" className="btn-cancel">Cancel</button></a>
              <button type="submit" className="btn-submit">Post</button>
            </div>
          </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);