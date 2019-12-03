import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './Home.css';


const calendarEmbed = "https://calendar.google.com/calendar/embed?src=9gkad3t3of6mecr49itogciq0c%40group.calendar.google.com&ctz=America%2FNew_York";

function Home() {
    return (
        <div className="App">
          <div className='row'>
            <div className='col1'>
              <Link to="/FreshOut"><button type="button" id='fresh-out-button'> Fresh Out? </button></Link>

              <div class="dropdown">
                <button class="dropbutton">Paradigm Shift</button>
                <div class="dropdown-content">
                  <Link to="/AboutParadigmShift"><p>About</p></Link>
                  <Link to="/"><p>Mentor Meetings</p></Link>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbutton">Skill Building</button>
                <div class="dropdown-content">
                  <Link to="/AboutSkillBuilding"><p>About</p></Link>
                  <Link to="/"><p>Educational Opportunities</p></Link>
                  <Link to="/"><p>Job Training</p></Link>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbutton">Entrepeneurship</button>
                <div class="dropdown-content">
                  <Link to="/AboutEntrepeneurship"><p>About</p></Link>
                  <Link to="/"><p>Goals and Planning</p></Link>
                  <Link to="/"><p>Entrepeneurship Training</p></Link>
                </div>
              </div>

            </div>

            <div className='col2'>
            <iframe src={calendarEmbed} width="280" height="280" frameborder="0" scrolling="no" id="calendarEmbed"/>
            </div>
          </div>

        </div>
    );
}

export default Home;
