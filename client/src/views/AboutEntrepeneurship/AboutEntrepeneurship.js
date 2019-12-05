import React from 'react';
import '../../app.css';
import './AboutEntrepeneurship.css';
import tmpImage from '../../assets/image-placeholder.jpg';
import jwt from 'jsonwebtoken';
import axios from 'axios';

class AboutEntrepeneurship extends React.Component {

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
      await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});

      await axios.get('http://localhost:5000/adminText/5de94aebb743d65040574d07')
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

    axios.post('http://localhost:5000/adminText/update/5de94aebb743d65040574d07', adminText)
      .then(res => console.log(res.data));

    this.hideForm();

  }

  render() {
    return (
      <div className="about-entrepeneurship-page-content">
        <img src = {tmpImage} id="about-e-image"></img>
        <div id="about-e-edit-image">
          <button type='button' className="admin-element">Edit Image</button>
        </div>
        <div className="top-paragraph">
          <p>{this.state.text}</p>
        </div>

        <div id="about-e-edit-text">
        {(this.state.user && this.state.user.permission) === 'admin' &&
          <button type='button'
                  className="admin-element"
                  id="about-e-button"
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
    );
  }
}

export default AboutEntrepeneurship;
