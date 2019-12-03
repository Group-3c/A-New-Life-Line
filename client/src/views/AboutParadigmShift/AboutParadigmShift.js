import React from 'react';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './AboutParadigmShift.css';
import tmpImage from '../../assets/image-placeholder.jpg';

function AboutParadigmShift() {
    return (
      <div className="about-paradigm-shift-page-content">
        <img src = {tmpImage} id="about-ps-image"></img>
        <div id="about-ps-edit-image">
          <button type='button' className="admin-element">Edit Image</button>
        </div>
        <div className="top-paragraph">
          <p id="about-ps-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nunc nec elit rutrum consectetur
          a a enim. Nulla vel lobortis est. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Vestibulum et libero turpis.
          </p>
        </div>

        <div id="about-ps-edit-text">
          <button type='button' className="admin-element">Edit Text</button>
        </div>
      </div>
    );
}

export default AboutParadigmShift;
