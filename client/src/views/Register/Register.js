import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

class Register extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        };
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
                    console.log(res.data);
                }
            });
    }

    render(){
        const {name, email, username, password, confirmPassword} = this.state;

        return(
            <div id="register-page">
                <form onSubmit={this.submitHandler} id="register-form">
                    <div id="register-title">
                      Register
                    </div>
                    <div className="register-fields">
                        <input type="text" name="name" placeholder="name" value={name} onChange={this.changeHandler}/>
                    </div>
                    <div className="register-fields">
                        <input type="text" name="email" placeholder="email" value={email} onChange={this.changeHandler}/>
                    </div>
                    <div className="register-fields">
                        <input type="text" name="username" placeholder="username" value={username} onChange={this.changeHandler}/>
                    </div>
                    <div className="password-fields">
                        <input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
                    </div>
                    <div className="password-fields">
                        <input type="password" name="confirmPassword" placeholder="Confirm password" value={confirmPassword} onChange={this.changeHandler}/>
                    </div>
                    <div id="register-button">
                      <button type="submit">Register</button>
                    </div>
                    <div id="to-login">
                      <Link to="/Login"><p>Already a member? Log In</p></Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
