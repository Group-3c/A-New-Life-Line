import React from 'react';
import logo from '../../assets/logo.svg';
import './Calendar.css';




const calendarEmbed = "https://calendar.google.com/calendar/embed?src=9gkad3t3of6mecr49itogciq0c%40group.calendar.google.com&ctz=America%2FNew_York";
function Calendar() {
    return (
        <div className="App">
            <div>
                <header className="App-header">
                    Calendar
                    <iframe src={calendarEmbed} width="1200" height="800" frameborder="0" scrolling="no">
                    </iframe>
                </header>
                <div className="container">
                    <form>
                    <div class="row">
                        <label for="eventname">Event Name</label>
                        <input
                            id="eventname"
                            type="text"
                            placeholder="Event Name"
                            />
                        <div className="column1">
                        <label for="eventmonth">Event Month</label>
                        <input
                            id="eventmonth"
                            type="text"
                            placeholder="MM"
                            class="field1"
                            />
                        </div>

                        <div className="column2">
                        <label for="eventday">Event Date</label>
                        <input
                            id="eventday"
                            type="text"
                            placeholder="DD"
                            class="field2"
                            />
                            </div>
                            </div>

                        <label for="eventtype">Event Type</label>
                        <select id="eventtype" name="event type">
                            <option value="empty">-</option>
                            <option value="Meeting">Meeting</option>
                            <option value="Seminar">Seminar</option>
                            <option value="Placeholder">Placeholder</option>
                        </select>

                        <label for="description">Description</label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Description"
                            />
                        
                    <input type="submit" value="Submit"/>
                    
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Calendar;
