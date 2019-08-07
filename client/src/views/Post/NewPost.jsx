import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations, selectors } from '../../redux';

class NewPost extends Component {
  
  constructor(props) {
    super(props);

    this.openFileUploader = this.openFileUploader.bind(this);
  }

  openFileUploader() {
    this.refs.fileUploader.click();
  }

  render() {
    return(
      <Fragment>
        <a href="/">Home</a>
        <section id="new-post">
          <h2>New Post</h2>
          <form method="post" action="/post" enctype="multipart/form-data">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text"></textarea>
            <label htmlFor="imgs">Images</label>
            <input type="button" value="Upload Images" onClick={this.openFileUploader}/>
            <input type="file" name="img" alt="Post Images" ref="fileUploader" multiple />
            <div className="btn-group">
              <button className="btn-cancel">Cancel</button>
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