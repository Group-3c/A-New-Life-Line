import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      question: '',
      name: '',
    }
  }
//gets current user data
  async componentDidMount() {
      await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});

  }

//sets question to input value
  onChangeQuestion(e) {
    this.setState({
      question: e.target.value
    });
  }
//on submit creates new post and send user back to main Forum page
  onSubmit(e) {
    e.preventDefault();

    const post = {
      question: this.state.question,
      name: this.state.user.username
    }


    axios.post('http://localhost:5000/posts/new-post', post)
      .then(res => console.log(res.data))


    this.setState({
      question:'',
    })

    window.location = '/Forum';
  }


  render() {
    return (
      <div>
        <h2>Create a new Post</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Question: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.question}
              onChange={this.onChangeQuestion}
              />
          </div>
      <div className="form-group">
          <input type="submit" value="Post" className="btn btn-primary"

           />
        </div>
      </form>
    </div>
    )
  }
}
