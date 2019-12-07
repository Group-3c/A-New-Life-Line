import React from 'react';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './Calendar.css';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { Button, Container, Table } from 'semantic-ui-react';

const calendarEmbed = "https://calendar.google.com/calendar/embed?src=9gkad3t3of6mecr49itogciq0c%40group.calendar.google.com&ctz=America%2FNew_York";

class Calendar extends React.Component {

constructor(props) {
    super(props);
    this.state = {name: '',
    month: '',
    date: '',
    type: '',
    description: '',
    address: '',
    username: '',
    list: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
        await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});
        console.log(this.state.user)

        await axios.get('http://localhost:5000/events/list')
            .then(res => this.setState({list:res.data}));
    }

handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    }

handleSubmit(event) {
    alert('Your event has been submitted! \n\nEvent name: ' + this.state.name
    + " \nEvent Date: " + this.state.month + "/" + this.state.date
    + " \nEvent Type: " + this.state.type
    + " \nEvent Description: " + this.state.description
    + " \nEvent Address: " + this.state.address
    + " \nUsername: " + this.state.user.username
    );

    window.location.reload();

    event.preventDefault();
    const Event = {
        name: this.state.name,
        month: this.state.month,
        date: this.state.date,
        type: this.state.type,
        description: this.state.description,
        address: this.state.address,
        username: this.state.user.username
    }
    axios.post('http://localhost:5000/events/new-event', Event)
        .then(res => console.log(res.data))
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
                                required
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
                                    required
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
                                    required
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

                    <label for="description">Description (Time)</label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Description"
                            name="description"
                            onChange={this.handleChange}
                            required
                            />

                    <label for="address">Address</label>
                        <input
                            id="address"
                            type="text"
                            placeholder="Address"
                            name="address"
                            onChange={this.handleChange}
                            required
                            />

                    <input type="submit" value="Submit"/>
                </form>
            </div>
            {(this.state.user && this.state.list && this.state.user.permission) === 'admin' &&
            <Container>
                    <Table celled>
                        <Table.Row>
                            <Table.HeaderCell>Event Name</Table.HeaderCell>
                            <Table.HeaderCell>Month</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Address</Table.HeaderCell>
                            <Table.HeaderCell>Username</Table.HeaderCell>
                            <Table.HeaderCell>Remove Listing</Table.HeaderCell>
                        </Table.Row>
                    {this.state.list.map(event => {
                            return(
                            <Table.Row>
                                <Table.Cell>{event.name}</Table.Cell>
                                <Table.Cell>{event.month}</Table.Cell>
                                <Table.Cell>{event.date}</Table.Cell>
                                <Table.Cell>{event.type}</Table.Cell>
                                <Table.Cell>{event.description}</Table.Cell>
                                <Table.Cell>{event.address}</Table.Cell>
                                <Table.Cell>{event.username}</Table.Cell>
                                <Table.Cell>
                                    <Button floated="right" onClick={() => {
                                        /*axios.delete('http://localhost:5000/events/list' + name)
                                        .then(res => console.log(res.message));
                                        this.setState({
                                            event: this.state.event.filter(el => el.name !== name)
                                        })
                                        axios.delete('http://localhost:5000/events/list' + name)*/
                                        alert('Event ' + event.name + " has been deleted!");
                                        window.location.reload();
                                    }}>Remove</Button>
                                </Table.Cell>
                            </Table.Row>)
                    })}
                    </Table>
                </Container>
                }
        </div>
        );
    }
}
export default Calendar
