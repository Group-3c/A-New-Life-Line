import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import backgroundImg from '../../assets/background-img.jpg';

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        };
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
                    console.log(res.data.message);
                }
            });
    }

    render(){
        const {username, password} = this.state;

        return(
            <div id="login-page">
                <form onSubmit={this.submitHandler} id="login-form">
                    <div id="login-title">
                      Log In
                    </div>
                    <div id="username-field">
                        <input type="text" name="username" placeholder="username" value={username} onChange={this.changeHandler}/>
                    </div>
                    <div id="password-field">
                        <input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
                    </div>
                    <div id="login-button">
                      <button type="submit">Log In</button>
                    </div>
                    <div id="to-register">
                      <Link to="/Register"><p>Not a member? Register</p></Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
