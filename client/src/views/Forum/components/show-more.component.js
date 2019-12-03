import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

    this.state = {comments: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/posts/comment/'+ this.props.match.params.id)
      .then(response => {
        this.setState({comments: response.data})
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
