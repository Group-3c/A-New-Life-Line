import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css';
import './Start.css';
import TextLoop from "react-text-loop";

class Start extends React.Component {

    render() {
        return (
            <div id="start-page-bg">
              <div id="button-div">
                <button type="button" id='start-login-button'> <Link to="/Login">Log In</Link></button>
              </div>
              <div id="start-page-content">


                <h1 id="start-title">A New Life Line</h1>

                <TextLoop interval={3000} className="text-loop">
                    <div>Once you choose hope, anything is possible</div>
                    <div>Felons helping Felons</div>
                    <div>The hard days are what make you stronger</div>
                    <div>You are not alone</div>
                </TextLoop>
                <p></p>

                <button type="button" id="learn-more-button"><Link to="/Cover">Learn More</Link></button>
              </div>
            </div>
        );
   }
}

export default Start;
