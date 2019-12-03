import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeParent = this.onChangeParent.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      message: '',
      name: ''
    }
  }

  async componentDidMount() {
      await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});

      console.log(this.state.user);
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  onChangeParent(e) {
    this.setState({
      parent: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      message: this.state.message,
      name: this.state.user.username
    }

    console.log(post)

    axios.post('http://localhost:5000/posts/comment/'+this.props.match.params.id, post)
      .then(res => console.log(res.data))


    this.setState({
      message:''

    })

    window.location = '/Forum';
  }


  render() {
    return (
      <div>
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
