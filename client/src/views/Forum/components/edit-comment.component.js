import React, { Component } from 'react';
import axios from 'axios';

export default class EditComment extends Component {
  constructor(props) {
    super(props);

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      message: ''
    }
  }
//used to change message
  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    })
  }
//sets message to new input value on submit
  onSubmit(e) {
    e.preventDefault();

    const comment = {
      message: this.state.message
    }

    console.log (comment);

    axios.post('http://localhost:5000/posts/update-comment/' + this.props.match.params.id, comment)
      .then(res => console.log(res.data));

    window.location = '/Forum';
  }

  render() {
    return (
    <div>
      <h3>Edit Comment</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Comment: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.message}
              onChange={this.onChangeMessage}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Post" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
