import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import jwt from 'jsonwebtoken';
import { Button, Container, Form, Grid } from 'semantic-ui-react';

class Register extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            errors: ''
        };
    }

    componentDidMount(){
        try {    
            if (localStorage.getItem('jwtoken') && jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user) {
                this.props.history.push('/Home');
            }       
        } catch(err) {
            this.props.history.push('/Register');
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        axios.post('http://localhost:5000/users/register', user)
            .then(res => {
                if (res.data === "Added")
                {
                    this.props.history.push('/Home');
                } else {
                    this.setState({errors:res.data});
                    console.log(this.state.errors);
                }
            });
    }

    render(){
        const {name, email, username, password, confirmPassword} = this.state;

        return(
            <>
            <br/>
            <Container>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group widths='equal'>
                        <Form.Input type="text" name="name" placeholder="name" value={name} onChange={this.changeHandler}/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input type="text" name="email" placeholder="email" value={email} onChange={this.changeHandler}/>
                        <Form.Input type="text" name="username" placeholder="username" value={username} onChange={this.changeHandler}/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
                        <Form.Input type="password" name="confirmPassword" placeholder="confirmPassword" value={confirmPassword} onChange={this.changeHandler}/>
                    </Form.Group>
                    <Button type="submit">Register</Button>
                </Form>
            </Container>
            <br/>
            {this.state.errors &&
            <Container>
                <Grid>
                    <Grid.Column>
                        {this.state.errors.map(error => {
                            return(
                                <>
                                <Grid.Row>{error}</Grid.Row>
                                <br/>
                                </>
                            )
                        })}
                    </Grid.Column>
                </Grid>
            </Container>}
            </>
        );
    }
}

export default Register;
