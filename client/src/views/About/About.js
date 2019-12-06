import React from 'react';
import '../../app.css';
import './About.css';
import tmpImage from '../../assets/image-placeholder.jpg';
import jwt from 'jsonwebtoken';
import axios from 'axios';


class About extends React.Component {

  constructor(props){
      super(props);

      this.onChangeText = this.onChangeText.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.showForm = this.showForm.bind(this);
      this.hideForm = this.hideForm.bind(this);

      this.state = {
          user: '',
          permission: '',
          text: '',
          showForm: false
      }
  }

  async componentDidMount() {
    try {
      if (localStorage.getItem('jwtoken') && jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user) {
        await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});

        await axios.get('http://localhost:5000/adminText/5de940ce193cce4df8518598')
          .then(response => {
            this.setState({
              text: response.data.text
            })
            console.log("Fetched text from database")
            console.log(response.data.text);
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    } catch(err) {
      console.log('Not logged in');
    }   
  }

  onChangeText(e) {
    this.setState({
      text: e.target.value
    })
  }

  showForm() {
    this.setState({
      showForm: true
    })
  }

  hideForm() {
    this.setState({
      showForm: false
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const adminText = {
      text: this.state.text,
    }

    console.log(adminText);

    axios.post('http://localhost:5000/adminText/update/5de940ce193cce4df8518598', adminText)
      .then(res => console.log(res.data));

    this.hideForm();

  }

  render() {
    return (
      <div className="App">
        <div className='rowAbout'>
          <div className='col1About'>
            <img src = {tmpImage}></img>

            {(this.state.user && this.state.user.permission) === 'admin' &&
              <button type='button'
                      className="admin-element"
                      id="image-button"
                      >Edit Image</button>
            }

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

export default About;
