import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import backgroundImg from '../../assets/background-img.jpg';
import jwt from 'jsonwebtoken';
import { Button, Container, Form, Grid } from 'semantic-ui-react';

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: ''
        };
    }

    componentDidMount(){
        //check to see if someone is logged in, if so, send to homepage
        try {
            if (localStorage.getItem('jwtoken') && jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user) {
                this.props.history.push('/Home');
            }
        } catch(err) {

            this.props.history.push('/Login');
        }
    }

    //for login form
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        //connects to the server to search for user and creates web token if info is correct
        axios.post('https://new-life-line.herokuapp.com/users/login', user)
            .then(res => {
                if (res.data.message === "Login")
                {
                    localStorage.setItem('jwtoken', res.data.token);
                    this.props.history.push('/Home');
                } else {
                    this.setState({errors: res.data.message});
                }
            });
    }

    //form display and errors
    render(){
        const {username, password} = this.state;

        return(
            <>
            <br/>
            <Container>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group widths='equal'>
                        <Form.Input type="text" name="username" placeholder="username" value={username} onChange={this.changeHandler}/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
                    </Form.Group>
                    <div id="login-content">
                        <Button type="submit">Login</Button>
                        <br />

                        <Link to="/Register" id="register-link">Not a member? Register</Link>
                    </div>
                </Form>
            </Container>
            <br/>
            {this.state.errors &&
            <Container>
                <Grid>
                    <Grid.Row centered>{this.state.errors}</Grid.Row>
                </Grid>
            </Container>}
            </>
        );
    }
}

export default Login;
