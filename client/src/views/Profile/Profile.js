import React from 'react';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './Profile.css';
import { Button, Container, Grid, Table } from 'semantic-ui-react';
import jwt from 'jsonwebtoken';
import axios from 'axios';

class Profile extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user:undefined,
            list:''
        }
    }

    async componentDidMount() {
        await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});

        
        await axios.get('https://a-new-life-line-server.herokuapp.com/users/list')
            .then(res => this.setState({list:res.data}));
    }

    render() {
        return (
            <div className="App">
                <br/>
                {this.state.user &&
                <Container>
                    <Grid columns={2} divided centered>
                        <Grid.Row>
                            <Grid.Column>Name</Grid.Column>
                            <Grid.Column>{this.state.user.name}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>Email</Grid.Column>
                            <Grid.Column>{this.state.user.email}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>Username</Grid.Column>
                            <Grid.Column>{this.state.user.username}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>Password</Grid.Column>
                            <Grid.Column>{this.state.user.password}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>Permission</Grid.Column>
                            <Grid.Column>{this.state.user.permission}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign="center">
                            <Button onClick={() => {
                            localStorage.removeItem('jwtoken');
                            window.location.reload();
                            }}>Logout</Button>
                        </Grid.Row>                    
                    </Grid>
                </Container>
                }
                <br />
                {(this.state.user && this.state.list && this.state.user.permission) === 'admin' &&
                <Container>
                    <Table celled>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Username</Table.HeaderCell>
                            <Table.HeaderCell>Password</Table.HeaderCell>
                            <Table.HeaderCell>Permission</Table.HeaderCell>
                        </Table.Row>
                    {console.log(this.state.list)}
                    {this.state.list.map(account => {
                        if(account.permission !== 'admin'){
                            return(
                            <Table.Row>
                                <Table.Cell>{account.name}</Table.Cell>
                                <Table.Cell>{account.email}</Table.Cell>
                                <Table.Cell>{account.username}</Table.Cell>
                                <Table.Cell>{account.password}</Table.Cell>
                                <Table.Cell>
                                    {account.permission}
                                    <Button floated="right" onClick={() => {
                                        axios.post('https://a-new-life-line-server.herokuapp.com/users/permission', {
                                            username:account.username, 
                                            permission:account.permission
                                        })
                                        .then(res => {
                                            console.log(res.message);
                                        });
                                        window.location.reload();
                                    }}>Switch</Button>
                                </Table.Cell>
                            </Table.Row>)
                        }
                    })}
                    </Table>
                </Container>
                }
                <br/>
            </div>
        );
   }
}

export default Profile;
