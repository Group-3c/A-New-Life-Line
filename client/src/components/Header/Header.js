import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import profileIcon from '../../assets/tmpProfileIcon.png';
import {Button} from 'semantic-ui-react';

const Header = () => {
    return (
        <div className='topnav'>
            {/* Logo */}
            <Link id="logo-link" to="/">
                <img className="topnav-logo" src={ "/tmpLogo.png" } alt="Project logo" />
            </Link>

            {/* Page Links */}
            <div className="topnav-right">
                <Link className="topnav-link" to="/About">About</Link>
                <Link className="topnav-link" to="/Forum">Forum</Link>
                <Link className="topnav-link" to="/Calendar">Calendar</Link>
            </div>

            {/* Profile Icon */}
            <div className="topnav-profile">
                <img src={profileIcon} alt="profile icon"></img>
                <Button floated="right" onClick={() => {
                    localStorage.removeItem('jwtoken');
                    window.location.reload();
                }}>Logout</Button>
            </div>
        </div>
    )
}

export default Header;
