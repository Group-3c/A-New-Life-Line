import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css';
import './Start.css';

class Start extends React.Component {

    render() {
        return (
            <div>
              <button type="button" id='start-login-button'> <Link to="/Login">Log In</Link></button>
              <h1>A New Life Line</h1>

              <p> A message of hope… felons helping felons… motivations… you are not alone </p>

              <button type="button" id="learn-more-button"><Link to="/Cover">Learn More</Link></button>
            </div>
        );
   }
}

export default Start;
