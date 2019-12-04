import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css';
import './Header.css';
import profileIcon from '../../assets/user.png';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
      <div className='topnav'>
          {/* Logo */}
          <div className="topnav-logo">
            <Link id="logo-link" to="/Home">
                <img src={ logo } alt="Site logo" />
            </Link>
          </div>


          {/* Page Links */}
          <div className="topnav-pages">
              <Link className="topnav-link" to="/About" style={{ textDecoration: 'none' }}>About</Link>
              <Link className="topnav-link" to="/Forum" style={{ textDecoration: 'none' }}>Forum</Link>
              <Link className="topnav-link" to="/Calendar" style={{ textDecoration: 'none' }}>Calendar</Link>

          </div>
          {/* Profile Icon */}

          <div className="topnav-profile">
              <Link to="/Profile"><img src={profileIcon} alt="profile icon">
                </img></Link>
          </div>
      </div>

    )
}

export default Header;
