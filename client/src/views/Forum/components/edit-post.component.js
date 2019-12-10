import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component {
  constructor(props) {
    super(props);

    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      question: ''
    }
  }

  onChangeQuestion(e) {
    this.setState({
      question: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      question: this.state.question
    }

    console.log(post);

    axios.post('https://new-life-line.herokuapp.com/posts/update/' + this.props.match.params.id, post)
      .then(res => console.log(res.data));

    window.location = '/Forum';
  }

  render() {
    return (
    <div>
      <h3>Edit Post</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Question: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.question}
              onChange={this.onChangeQuestion}
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
