import React from 'react';
import '../../../app.css';
import '../About.css';
import tmpImage from '../../../assets/image-placeholder.jpg';
import jwt from 'jsonwebtoken';
import axios from 'axios';


class AboutPage extends React.Component {

  constructor(props){
      super(props);

      console.log(props);

      this.state = {
          user: '',
          permission: ''
      }
  }

  async componentDidMount() {
    try {
      if (localStorage.getItem('jwtoken') && jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user) {
        await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});

        await axios.get('http://localhost:5000/adminText/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              text: response.data.text
            })
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    } catch(err) {
      console.log('Not logged in');
    }
  }

  render() {
    return (
      <div className="App">
        <div className='rowAbout'>
          <div className='col1About'>
            <img src = {tmpImage}></img>
          </div>

          <div className='col2About'>
            <p>{this.state.text}</p>

            {(this.state.user && this.state.user.permission) === 'admin' &&
              <button type='button'
                      className="admin-element"
                      id="about-button"
                      onClick={this.showForm}>Edit Text</button>
            }

            { this.state.showForm &&
              <form className="admin-form" onSubmit={this.onSubmit}>
                <div className="form-group">
                  <textarea rows="7" cols="40"
                    required
                    className="form-control"
                    value={this.state.text}
                    onChange={this.onChangeText}
                  />
                </div>

                <div className="form-group">
                  <input type="submit" value="Submit Text" className="admin-element" />
                </div>
              </form>
            }

          </div>

        </div>

      </div>
    );
  }
}

export default AboutPage;
