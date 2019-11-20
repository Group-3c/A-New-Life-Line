import React from 'react';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './About.css';
import facebookLogo from '../../assets/facebook.png';
import linkedinLogo from '../../assets/linkedin.png';

function About() {
    return (
      <div className="App">
        <div className='row'>
          <div className='col1'>
            { /*Button that only shows when logged in as admin*/}
            <button type='button' className="admin-element">Edit Image</button>
          </div>

          <div className='col2'>
            Column 2
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nunc nec elit rutrum consectetur
              a a enim. Nulla vel lobortis est. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos. Vestibulum et libero turpis. Nulla facilisi. Sed viverra faucibus velit, ac
              dapibus risus dictum eget. Proin vel aliquam elit, id porttitor tellus. Quisque dolor urna, feugiat
              nec tristique sit amet, tempus ac ipsum.
            </p>
            <button type='button' className="admin-element">Edit Text</button>
            <div id="social-media">
              <a href="www.facebook.com"><img src = {facebookLogo} alt="facebook logo"
               className="socialmedia-logo"></img></a>
              <a href="www.linkedin.com"><img src = {linkedinLogo} alt="linkedIn logo"
               className="socialmedia-logo"></img></a>
            </div>
          </div>

        </div>

      </div>
    );
}

export default About;
