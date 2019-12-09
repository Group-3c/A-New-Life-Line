import React from 'react';
import '../../app.css';
import './GoalsPlanning.css';
import tmpImage from '../../assets/goalsPlanning.png';
import jwt from 'jsonwebtoken';
import axios from 'axios';

class GoalsPlanning extends React.Component{

  //GoalsPlanning has editable information by admin, so it's connected to backend
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

  //get request to get the current text from the database
  //NOTE: id value in the get request is hard coded! using this.props.match.params.id did NOT work
  async componentDidMount() {
      await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});

      await axios.get('http://localhost:5000/adminText/5ded23cc6e6e5a2d10f00ae4')
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

  //update requests to database when form is submitted
  onSubmit(e) {
    e.preventDefault();

    const adminText = {
      text: this.state.text,
    }

    console.log(adminText);

    axios.post('http://localhost:5000/adminText/update/5ded23cc6e6e5a2d10f00ae4', adminText)
      .then(res => console.log(res.data));

    this.hideForm();

  }

  render() {
    return (
      <div className="goals-planning-page-content">
        <img src = {tmpImage} id="gp-image"></img>

        <div className="top-paragraph">
          <p>{this.state.text}</p>
        </div>

        <div id="gp-edit-text">

        {/*Refer to footer.js comments regarding these next two JS elements*/}
        
        {(this.state.user && this.state.user.permission) === 'admin' &&
          <button type='button'
                  className="admin-element"
                  id="about-gp-button"
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
        <div id="icon-credits">Icons made by <a href="https://www.flaticon.com/authors/payungkead" title="Payungkead">Payungkead</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    );
  }
}

export default GoalsPlanning;
