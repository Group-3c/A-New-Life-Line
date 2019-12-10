import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

//For admin or user who posted
const Comment = props => (
  <tr>
    <td>{props.comment.message}</td>
    <td>{props.comment.name}</td>
    <td>
      <Link to={"/Forum/edit-comment/"+props.comment._id}>edit</Link> | <a href="#" onClick={() => { props.deleteComment(props.comment._id)}}>delete</a>
    </td>
  </tr>
)
//for users not connected to comment
const Comment2 = props => (
  <tr>
    <td>{props.comment.message}</td>
    <td>{props.comment.name}</td>
  </tr>
)

export default class CommentList extends Component{
  constructor(props) {
    super(props);

    this.deleteComment = this.deleteComment.bind(this);

    this.state = {
      comments: [],
      posts: []
    };
  }
//gets current user data, original post and comments associated with it
  async componentDidMount() {
    axios.get('http://localhost:5000/posts/comment/'+ this.props.match.params.id)
      .then(response => {
        this.setState({comments: response.data})
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:5000/posts/' + this.props.match.params.id)
    .then(response => {
      this.setState({posts: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
    await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});
  }

//deletes comment from database and sends back to main forum page
  deleteComment(id) {
    axios.delete('http://localhost:5000/posts/comment/' + id)
      .then(res => console.log(res.data));
    this.setState({
      comments: this.state.comments.filter(el => el._id !== id)
    })
    window.location = '/Forum';
  }

//lists comments based on current user permission
  commentList() {
    return this.state.comments.map(currentComment => {
      if (this.state.user.permission === "admin" || this.state.user.username === currentComment.name) {
        return <Comment comment={currentComment} deleteComment={this.deleteComment} key={currentComment._id}/>
      }
      else {
        return <Comment2 comment={currentComment} key={currentComment._id}/>;
      }
    })
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
              <td>
                <Link to={"/Forum/comment/"+this.state.posts._id}>Add comment</Link>
              </td>
            </tr>}
          </tbody>
        </table>
        <h2>Comments</h2>
        <table className="table">
          <tbody>
            {this.commentList()}
          </tbody>
        </table>
      </div>
    )
  }
}
