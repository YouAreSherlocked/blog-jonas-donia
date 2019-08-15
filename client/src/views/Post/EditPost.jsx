import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations, selectors } from '../../redux';
import * as fetch from '../../services';

class EditPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    await fetch.posts.getPostById(id).then(res => this.setState({ post: res.post}));
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch.posts.updatePost(e.target.elements, this.state.post._id)
  }
  
  render() {
    return(
      <Fragment>
        <a href="/">Home</a>
        <section id="edit-post">
          <h2>Edit Post <i>{this.state.post.title}</i></h2>
          { this.state.post.text ?
          <form onSubmit={this.handleSubmit}>
          {console.log(this.state.post.text)}
            <label htmlFor="title">Title</label>
            <input type="text" name="title" defaultValue={this.state.post.title} />
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" defaultValue={this.state.post.text}></textarea>
            <label htmlFor="imgs">Images</label>
            <input type="button" value="Upload Images" onClick={this.openFileUploader}/>
            <input type="file" name="img" alt="Post Images" ref="fileUploader" multiple />
            <div className="btn-group">
              <button className="btn-cancel">Cancel</button>
              <button type="submit" className="btn-submit">Update</button>
            </div>
          </form>
          : <p>Loading Content</p> }
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);