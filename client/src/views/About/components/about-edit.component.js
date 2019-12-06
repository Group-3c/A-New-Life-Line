import React from 'react';
import '../../../app.css';
import '../About.css';
import tmpImage from '../../../assets/image-placeholder.jpg';
import jwt from 'jsonwebtoken';
import axios from 'axios';


class AboutPageEdit extends React.Component {

  constructor(props){
      super(props);

      this.onChangeText = this.onChangeText.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.showForm = this.showForm.bind(this);
      this.hideForm = this.hideForm.bind(this);

      this.state = {
          text: '',
          showForm: false
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

    axios.post('http://localhost:5000/adminText/update/'+this.props.match.params.id, adminText)
      .then(res => console.log(res.data));

    this.hideForm();

  }

  render() {
    return(
      <div></div>
    );
  }

}

export default AboutPageEdit;
