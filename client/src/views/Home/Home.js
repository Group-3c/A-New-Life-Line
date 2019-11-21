import React from 'react';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './Home.css';


const calendarEmbed = "https://calendar.google.com/calendar/embed?src=9gkad3t3of6mecr49itogciq0c%40group.calendar.google.com&ctz=America%2FNew_York";

function Home() {
    return (
        <div className="App">
          <div className='row'>
            <div className='col1'>
              <button type="button" id='fresh-out-button'> Fresh Out? </button>

              <div class="dropdown">
                <button class="dropbutton">Paradigm Shift</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbutton">Skill Building</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbutton">Entrepeneurship</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

            </div>

            <div className='col2'>
            <iframe src={calendarEmbed} width="280" height="280" frameborder="0" scrolling="no" id="calendarEmbed"/>
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
