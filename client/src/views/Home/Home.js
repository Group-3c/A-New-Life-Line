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
            <button type="button" id='fresh-out-button'> <Link to="/FreshOut">Fresh Out? </Link></button>
              <div class="dropdown">
                <button class="dropbutton">Paradigm Shift</button>
                <div class="dropdown-content">
                  <Link to="/AboutParadigmShift"><p>About</p></Link>
                  <Link to="/MentorMeetings"><p>Mentor Meetings</p></Link>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbutton">Skill Building</button>
                <div class="dropdown-content">
                  <Link to="/AboutSkillBuilding"><p>About</p></Link>
                  <Link to="/EducationalOpportunities"><p>Educational Opportunities</p></Link>	
                  <Link to="/JobTraining"><p>Job Training</p></Link>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbutton">Entrepeneurship</button>
                <div class="dropdown-content">
                  <Link to="/AboutEntrepeneurship"><p>About</p></Link>
                  <Link to="/GoalsPlanning"><p>Goals and Planning</p></Link>	
                  <Link to="/EntTraining"><p>Entrepeneurship Training</p></Link>
                </div>
                
              </div>
              
            </div>
            <div className='col2'>
              <div className='dashCalendar'>
              <iframe src={calendarEmbed} height="350px" width="300px" frameborder="0" scrolling="no" id="calendarEmbed"/>
              </div>
              <div id='tasks'>
                <h3> Tasks </h3>
                <ul>
                  <li>Skill Assessment</li>
                  <li>...</li>
                  <li>...</li>
                </ul>
              </div>
            </div>
            
          </div>

        </div>
    );
}

export default Home;
