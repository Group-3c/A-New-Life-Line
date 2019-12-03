import React from 'react';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './Donate.css';

function Donate() {
    return (
        <div className="donate-page-content">
          <div className="top-paragraph">
            <p id="donate-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nunc nec elit rutrum consectetur
            a a enim. Nulla vel lobortis est. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Vestibulum et libero turpis.
            </p>
          </div>

          <div id="donate-text-button">
            <button type='button' className="admin-element">Edit Text</button>
          </div>

          <div className="donate-button">
            <a href="https://paypal.com" target="_blank"className='donate-link'>Donate</a>
          </div>

          <div id="donate-link-button">
            <button type='button' className="admin-element">Edit Link</button>
          </div>
        </div>
    );
}

export default Donate;
