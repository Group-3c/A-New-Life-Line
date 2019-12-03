import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css';
import './Footer.css';
import facebookLogo from '../../assets/facebook.png';
import linkedinLogo from '../../assets/linkedin.png';
import Donate from "../../views/Donate/Donate"

const Footer = () => {
    return (
        <div className='footernav'>
            <div className='footer-left'>
              Info
            </div>
            <div className='buttonDiv'>
              <Link id="logo-link" to="/Donate"><button type="button" id='donate-button'> Donate </button></Link>
            </div>
            {/* Page Links */}
            <div className="footer-right">

                <div id="social-media">
                  <a href="https://www.facebook.com/" target="_blank"><img src = {facebookLogo} alt="facebook logo"
                   className="socialmedia-logo"></img></a>
                  <a href="https://www.linkedin.com" target="_blank"><img src = {linkedinLogo} alt="linkedIn logo"
                   className="socialmedia-logo"></img></a>
                </div>
            </div>


        </div>
    )
}

export default Footer;
