import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      message: '',
      name: '',
      posts: []
    }
  }

//gets current user data and current post data
  async componentDidMount() {
      await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});
      axios.get('http://localhost:5000/posts/' + this.props.match.params.id)
      .then(response => {
        this.setState({posts: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
  }
//for input message
  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    });
  }
//creates new comment on submit and sends user back to Forum main page
  onSubmit(e) {
    e.preventDefault();

    const comment = {
      message: this.state.message,
      name: this.state.user.username,
    }

    axios.post('http://localhost:5000/posts/comment/'+this.props.match.params.id, comment)
      .then(res => console.log(res.data))


    this.setState({
      message:''

    })

    window.location = '/Forum';
  }


  render() {
    return (
      <div>
        <h2>Post</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Question</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {<tr>
              <td>{this.state.posts.question}</td>
              <td>{this.state.posts.name}</td>
            </tr>}
          </tbody>
        </table>
        <h2>Comment</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Reply: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.message}
              onChange={this.onChangeMessage}
              />
          </div>
      <div className="form-group">
          <input type="submit" value="Post" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
