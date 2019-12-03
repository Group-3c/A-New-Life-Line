import React from 'react';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './AboutEntrepeneurship.css';
import tmpImage from '../../assets/image-placeholder.jpg';

function AboutEntrepeneurship() {
    return (
      <div className="about-entrepeneurship-page-content">
        <img src = {tmpImage} id="about-e-image"></img>
        <div id="about-e-edit-image">
          <button type='button' className="admin-element">Edit Image</button>
        </div>
        <div className="top-paragraph">
          <p id="about-e-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nunc nec elit rutrum consectetur
          a a enim. Nulla vel lobortis est. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Vestibulum et libero turpis.
          </p>
        </div>

        <div id="about-e-edit-text">
          <button type='button' className="admin-element">Edit Text</button>
        </div>
      </div>
    );
}

export default AboutEntrepeneurship;
