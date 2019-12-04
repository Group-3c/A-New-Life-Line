import React from 'react';
import '../../app.css';
import './AboutSkillBuilding.css';
import tmpImage from '../../assets/image-placeholder.jpg';

function AboutSkillBuilding() {
    return (
      <div className="about-skill-building-page-content">
        <img src = {tmpImage} id="about-sb-image"></img>

        {/*ADMIN ELEMENT*/}
        <div id="about-sb-edit-image">
          <button type='button' className="admin-element">Edit Image</button>
        </div>
        <div className="top-paragraph">
          <p id="about-sb-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nunc nec elit rutrum consectetur
          a a enim. Nulla vel lobortis est. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Vestibulum et libero turpis.
          </p>
        </div>

        {/*ADMIN ELEMENT*/}
        <div id="about-sb-edit-text">
          <button type='button' className="admin-element">Edit Text</button>
        </div>
      </div>
    );
}

export default AboutSkillBuilding;
