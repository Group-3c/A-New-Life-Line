import React from 'react';
import axios from 'axios';

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
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="username" placeholder="username" value={username} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;