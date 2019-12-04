import React from 'react';
import '../../app.css';
import './Forum.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from "./components/navbar.component";
import CreatePost from "./components/create-post.component";
import PostList from "./components/post-list.component";
import EditPost from "./components/edit-post.component";
import CreateComment from "./components/create-comment.component";
import ShowMore from "./components/show-more.component";

function Forum() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route exact path="/Forum" component={PostList} />
          <Route path="/Forum/create" component={CreatePost} />
          <Route path="/Forum/edit/:id" component={EditPost} />
          <Route path="/Forum/comment/:id" component={CreateComment} />
          <Route path="/Forum/show-more/:id" component={ShowMore} />
        </div>
      </Router>
    );
}

export default Forum;
