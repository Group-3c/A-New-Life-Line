import React from 'react';

class Register extends React.Component{
    state = {message: ''};

    componentDidMount() {
        fetch('/users/register')
            .then(res => res.json())
            .then(message => this.setState({message}));
    }

    render(){
        console.log(this.state.message.type);
        return(
            <h1>{this.state.message.type}</h1>
        );
    }
}

export default Register;