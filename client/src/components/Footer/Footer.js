import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css';
import './Footer.css';
import facebookLogo from '../../assets/facebook.png';
import linkedinLogo from '../../assets/linkedin.png';
import jwt from 'jsonwebtoken';
import axios from 'axios';

class Footer extends React.Component {

    constructor(props){
        super(props);

        this.onChangeFBText = this.onChangeFBText.bind(this);
        this.onChangeLIText = this.onChangeLIText.bind(this);
        this.showForm = this.showForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.hideForm = this.hideForm.bind(this);


        this.state = {
            user: '',
            permission: '',
            fbText: '',
            liText: '',
            showForm: false
        }
    }

  async componentDidMount() {
      await this.setState({user:jwt.verify(localStorage.getItem('jwtoken'), "SECRET").user});

      await axios.get('http://localhost:5000/adminText/5ded0873b740ec7948abeb1c')
        .then(response => {
          this.setState({
            fbText: response.data.text
          })

        })
        .catch(function (error) {
          console.log(error);
        })


      await axios.get('http://localhost:5000/adminText/5ded0888b740ec7948abeb1d')
        .then(response => {
          this.setState({
            liText: response.data.text
          })

        })
        .catch(function (error) {
          console.log(error);
        })



  }

  onChangeFBText(e) {
    this.setState({
      fbText: e.target.value
    })
  }
  onChangeLIText(e) {
    this.setState({
      liText: e.target.value
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

    const fbLink = {
      text: this.state.fbText
    }
    const liLink = {
      text: this.state.liText
    }

    console.log(fbLink);
    console.log(liLink);

    axios.post('http://localhost:5000/adminText/update/5ded0873b740ec7948abeb1c', fbLink)
      .then(res => console.log(res.data));
    axios.post('http://localhost:5000/adminText/update/5ded0888b740ec7948abeb1d', liLink)
      .then(res => console.log(res.data));


    this.hideForm();

  }

  render() {
    return (
        <div className='footernav'>
            <div className='footer-left'>
              <Link className="footer-link" to="/HireMembers" style={{ textDecoration: 'none' }}>Hire our Members</Link>
              <Link className="footer-link" to="/AccessDatabase" style={{ textDecoration: 'none' }}>Access our Database</Link>
            </div>
            <div className='buttonDiv'>
              <Link id="logo-link" to="/Donate"><button type="button" id='donate-button'> Donate </button></Link>
            </div>
            {/* Page Links */}
            <div className="footer-right">

                {(this.state.user && this.state.user.permission) === 'admin' &&
                  <div>
                    <button type="button" className='link-edit-button' onClick={this.showForm}>Edit Links</button>
                  </div>
                }

                { this.state.showForm &&
                  <form className="admin-form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input type="text" placeholder="new Facebook link" value={this.state.fbText} onChange={this.onChangeFBText} />
                      <input type="text" placeholder="new LinkedIn link" value={this.state.liText} onChange={this.onChangeLIText}/>
                    </div>

                    <div className="form-group">
                      <input type="submit" value="Submit Links" className="admin-element" />
                    </div>
                  </form>
                }

                <div id="social-media">
                  <a href= {this.state.fbText} target="_blank" rel="noopener noreferrer"><img src = {facebookLogo} alt="facebook logo"
                   className="socialmedia-logo"></img></a>
                  <a href= {this.state.liText} target="_blank" rel="noopener noreferrer"><img src = {linkedinLogo} alt="linkedIn logo"
                   className="socialmedia-logo"></img></a>
                </div>
            </div>


        </div>
    )
  }
}

export default Footer;
