import React from 'react';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './Calendar.css';

const calendarEmbed = "https://calendar.google.com/calendar/embed?src=9gkad3t3of6mecr49itogciq0c%40group.calendar.google.com&ctz=America%2FNew_York";
function Calendar() {
    return (
        <div className="App">
            <div>
            <header className="App-header">
                Calendar
                <iframe src={calendarEmbed} width="1200" height="800" frameBorder="0" scrolling="no"/>
            </header>
        </div>
        </div>
    );
}

export default Calendar;
