import React from 'react';
import '../../app.css';
import './EntTraining.css';
import tmpImage from '../../assets/image-placeholder.jpg';

function EntTraining() {
    return (
      <div className="ent-training-page-content">
        <img src = {tmpImage} id="et-image"></img>
        <div id="et-edit-image">
          <button type='button' className="admin-element">Edit Image</button>
        </div>
        <div className="top-paragraph">
          <p id="et-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nunc nec elit rutrum consectetur
          a a enim. Nulla vel lobortis est. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Vestibulum et libero turpis.
          </p>
        </div>

        <div id="et-edit-text">
          <button type='button' className="admin-element">Edit Text</button>
        </div>
      </div>
    );
}

export default EntTraining;
