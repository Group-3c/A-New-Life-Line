import React from 'react';
import {withRouter} from 'react-router-dom';

const jwt = require('jsonwebtoken');

class AuthRoute extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            user: undefined
        };
    }

    async componentDidMount(){
        //checks if there is a user logged in, sends to login page if no user
        try {
            await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});
        } catch(err) {
            
            this.props.history.push('/Login');
        }

        if (this.state.user === undefined){
            this.props.history.push('/Login');
        }
    }

    render(){
        //waits for user check to finish
        if (this.state.user === undefined){
            return (
                <h1>Loading...</h1>
            )
        }

        //displays protected pages
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(AuthRoute);