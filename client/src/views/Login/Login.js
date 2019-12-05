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

        try {
            if (localStorage.getItem('jwtoken') && jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user) {
                this.props.history.push('/Home');
            }
        } catch(err) {

            this.props.history.push('/Login');
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:5000/users/login', user)
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
                    <Button type="submit">Login</Button>
                    <Link to="/Register" >Register</Link>
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
