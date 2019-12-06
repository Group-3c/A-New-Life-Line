import React from 'react';
import '../../app.css';
import './Donate.css';

function Donate() {
    return (
        <div className="donate-page-content">
          <div className="top-paragraph">
            <h1>Support the Project</h1>
            <p id="donate-text">
              Donations allow A New Life Line to expand and reach many more individuals who need help and a sense of community.
              If you wish to contribute to the goal of this organization, please consider donating any amount. We appreciate the
              support!
            </p>
          </div>

          <br />

          <div className="donate-button">
            <a href="https://paypal.com" target="_blank" rel="noopener noreferrer" className='donate-link'>Donate Today</a>
          </div>

          <div id="donate-link-button">
            <button type='button' className="admin-element">Edit Link</button>
          </div>
        </div>
    );
}

export default Donate;
