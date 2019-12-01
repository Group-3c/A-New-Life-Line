import React from 'react';
import axios from 'axios';

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
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="name" placeholder="name" value={name} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="email" value={email} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="username" placeholder="username" value={username} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="password" name="confirmPassword" placeholder="confirmPassword" value={confirmPassword} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;