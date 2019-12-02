import React from 'react';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './Calendar.css';

const calendarEmbed = "https://calendar.google.com/calendar/embed?src=9gkad3t3of6mecr49itogciq0c%40group.calendar.google.com&ctz=America%2FNew_York";

class Calendar extends React.Component {

constructor(props) {
    super(props);
    this.state = {name: '',
    month: '',
    date: '',
    type: '',
    description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    }

handleSubmit(event) {
    alert('Your event has been submitted! \n\nEvent name: ' + this.state.name
    + " \nEvent Date: " + this.state.month + "/" + this.state.date
    + " \nEvent Type: " + this.state.type
    + " \nEvent Description: " + this.state.description
    );
    event.preventDefault();
    }

 render() {
    return (
        <div className="App">
            <div className="calendar">
                <iframe src={calendarEmbed} frameborder="0" scrolling="no"/>
            </div>

            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    
                        <label for="eventname">Event Name</label>
                            <input
                                id="eventname"
                                type="text"
                                placeholder="Event Name"
                                name="name"
                                onChange={this.handleChange}
                                />
                        <div class="row">
                        <div className="column1">
                            <label for="eventmonth">Event Month</label>
                                <input
                                    id="eventmonth"
                                    type="text"
                                    placeholder="MM"
                                    class="field1"
                                    name="month"
                                    onChange={this.handleChange}
                                    />
                        </div>

                        <div className="column2">
                            <label for="eventday">Event Date</label>
                                <input
                                    id="eventday"
                                    type="text"
                                    placeholder="DD"
                                    class="field2"
                                    name="date"
                                    onChange={this.handleChange}
                                    />
                        </div>

                        <div className="column3">
                            <div className="textheight">
                            <label for="eventtype">Event Type</label>
                            </div>
                                <select id="eventtype"
                                        class="field2"
                                        name="type"
                                        onChange={this.handleChange}
                                    >
                                        <option selected value="empty">-</option>
                                        <option value="Meeting">Meeting</option>
                                        <option value="Seminar">Seminar</option>
                                        <option value="Placeholder">Placeholder</option>
                                </select>
                        </div>
                    </div>

                    <label for="description">Description</label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Description"
                            name="description"
                            onChange={this.handleChange}
                            />

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
        );
    }
}
export default Calendar
