import React, {Component} from 'react';
import axios from 'axios';

const Comment = props => (
  <tr>
    <td>{props.comment.message}</td>
    <td>{props.comment.name}</td>
  </tr>
)


export default class CommentList extends Component{
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      posts: []
    };
  }

  componentDidMount() {
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
  }

  commentList() {
    return this.state.comments.map(currentComment => {
      return <Comment comment={currentComment} key={currentComment._id}/>
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
