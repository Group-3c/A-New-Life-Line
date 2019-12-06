import React from 'react';
import '../../app.css';
import './About.css';
import tmpImage from '../../assets/image-placeholder.jpg';


class About extends React.Component {

  render() {
    return (
      <div className="App">
        <div className='rowAbout'>
          <div className='col1About'>
            <img src = {tmpImage}></img>
          </div>

          <div className='col2About'>
            <h1>About the A New Life Line</h1>
            <p>
            A New Life Line is a social enterprise providing assessment and re-entry support in the form of job placement,
             training, and mentorship for men transitioning from incarceration to their communities after they are released.
             A New Life Line combines both in-person and online, asynchronous support from other formerly incarcerated persons
              along their journey. </p>

            <br />
            <h1>About the Creator</h1>
            <p>
              My name is Steven Revels, my company is A New Life Line, and my goal is to bring a divided group of people
              together... felons! Don’t looked shocked, you heard me right: felons! The word alone is intimidating and
              makes people back off. I want to change that. Many felons in the USA have a hard time getting
              ahead. That’s where I come in! Everyone goes through chapters in their life where they don't make the best
              decisions. This program will be something like a community for felons, to progress, to talk about their different
              issues and challenges, and to help each other to overcome obstacles. Through the website we hope to build a
              community of positive individuals.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
