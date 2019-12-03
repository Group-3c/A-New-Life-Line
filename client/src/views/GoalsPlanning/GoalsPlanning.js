import React from 'react';
import logo from '../../assets/logo.svg';
import '../../app.css';
import './GoalsPlanning.css';
import tmpImage from '../../assets/image-placeholder.jpg';

function GoalsPlanning() {
    return (
      <div className="goals-planning-page-content">
        <img src = {tmpImage} id="gp-image"></img>
        <div id="gp-edit-image">
          <button type='button' className="admin-element">Edit Image</button>
        </div>
        <div className="top-paragraph">
          <p id="gp-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nunc nec elit rutrum consectetur
          a a enim. Nulla vel lobortis est. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Vestibulum et libero turpis.
          </p>
        </div>

        <div id="gp-edit-text">
          <button type='button' className="admin-element">Edit Text</button>
        </div>
      </div>
    );
}

export default GoalsPlanning;
