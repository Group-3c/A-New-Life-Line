import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/Forum" className="navbar-brand">Forum</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/Forum/create" className="nav-link">Create Post</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
