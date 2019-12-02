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
        if (this.state.user === undefined){
            return (
                <h1>Loading...</h1>
            )
        }

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(AuthRoute);