import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Post = props => (
  <tr>
    <td>{props.post.question}</td>
    <td>{props.post.name}</td>
    <td>
      <Link to={"/Forum/edit/"+props.post._id}>edit</Link> | <a href="#" onClick={() => { props.deletePost(props.post._id)}}>delete</a> |
      <Link to={"/Forum/comment/"+props.post._id}> comment</Link> | <Link to={"/Forum/show-more/"+props.post._id}> Show Comments</Link>
    </td>
  </tr>
)

export default class PostList extends Component {
  constructor(props) {
    super(props);

    console.log("props are: ");
    console.log(props);

    this.deletePost = this.deletePost.bind(this);
    this.state = {posts: []};
  }

  componentDidMount() {
    axios.get('https://new-life-line.herokuapp.com/posts/')
      .then(response => {
        this.setState({posts: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
  }


  deletePost(id) {
    console.log("ID value in delete function is: ");
    console.log(id);

    axios.delete('https://new-life-line.herokuapp.com/posts/' + id)
      .then(res => console.log(res.data));
    this.setState({
      posts: this.state.posts.filter(el => el._id !== id)
    })
    axios.delete('https://new-life-line.herokuapp.com/posts/comment/' + id)
  }

  postList() {
    return this.state.posts.map(currentpost => {
      return <Post post={currentpost} deletePost={this.deletePost} key={currentpost._id}/>;
    })

  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Questions</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.postList()}
          </tbody>
        </table>
      </div>
    )
  }
}
