import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css';
import './Cover.css';
import num1 from '../../assets/num1.png';
import num2 from '../../assets/num2.png';
import num3 from '../../assets/num3.png';
import step1Img from '../../assets/step1-image.png'
import step2Img from '../../assets/step2-image.png'
import step3Img from '../../assets/step3-image.png'


class Cover extends React.Component {

    render() {
        return (
            <div id="cover-content">
              <h1 id="cover-title">A New Life Line</h1>


              <div id="cover-columns">
                <div id="cover-col1">
                  <h3>Paradigm Shift</h3>
                  <img alt="number 1" src={num1} className="num-images"/>
                  <div id="img1">
                    <img alt="paradigm shift image" src={step1Img} className="step-images" />
                    <div id="step1-content" className="step-content">A different way of thinking</div>
                  </div>
                </div>
                <div id="cover-col2">
                  <h3>Skill Building</h3>
                  <img alt="number 2" src={num2} className="num-images"/>
                  <div id="img2">
                    <img alt="paradigm shift image" src={step2Img} className="step-images" />
                    <div id="step2-content" className="step-content">A trade nobody can take from you</div>
                  </div>
                </div>
                <div id="cover-col3">
                  <h3>Entrepreneurship</h3>
                  <img alt="number 3" src={num3} className="num-images"/>
                  <div  id="img3">
                    <img alt="entrepeneurship image" src={step3Img} className="step-images" id="img2" />
                    <div id="step3-content" className="step-content">Leap of faith to success</div>
                  </div>
                </div>
              </div>

              <button type="button" id="get-started-button"><Link to="/Register">Get Started</Link></button>

              <div id="icon-credits">Icons made by <a href="https://www.flaticon.com/authors/payungkead" title="Payungkead">Payungkead</a> from
              <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

            </div>
        );
   }
}

export default Cover;
