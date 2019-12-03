import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import FreshOut from "./views/FreshOut/FreshOut"
import About from "./views/About/About"
import AboutParadigmShift from "./views/AboutParadigmShift/AboutParadigmShift"
import AboutSkillBuilding from "./views/AboutSkillBuilding/AboutSkillBuilding"
import AboutEntrepeneurship from "./views/AboutEntrepeneurship/AboutEntrepeneurship"
import MentorMeetings from "./views/MentorMeetings/MentorMeetings"
import EducationalOpportunities from "./views/EducationalOpportunities/EducationalOpportunities"
import JobTraining from "./views/JobTraining/JobTraining"
import GoalsPlanning from "./views/GoalsPlanning/GoalsPlanning"
import EntTraining from "./views/EntTraining/EntTraining"
import Forum from "./views/Forum/Forum"
import Calendar from "./views/Calendar/Calendar"
import Donate from "./views/Donate/Donate"
import Profile from "./views/Profile/Profile"
import VideoChatJoin from "./views/Video Chat/VideoChatJoin";
import VideoChatHost from "./views/Video Chat/VideoChatHost";
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './app.css';
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import AuthRoute from "./components/AuthRoute"


const App = () => {
  return (
    <div className='page-container'>
      <Header />
      <div className='content-wrap'>
        <Switch>
          {/*Move these to AuthRoute when done testing*/}
          <Route exact path="/Home" component={Home} />
          <Route exact path="/MentorMeetings" component={MentorMeetings} />
          <Route exact path="/EducationalOpportunities" component={EducationalOpportunities} />
          <Route exact path="/JobTraining" component={JobTraining} />
          <Route exact path="/GoalsPlanning" component={GoalsPlanning} />
          <Route exact path="/EntTraining" component={EntTraining} />
          {/**/}


          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/About" component={About} />
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <AuthRoute>

            <Route exact path="/FreshOut" component={FreshOut} />
            <Route exact path="/AboutParadigmShift" component={AboutParadigmShift} />
            <Route exact path="/AboutSkillBuilding" component={AboutSkillBuilding} />
            <Route exact path="/AboutEntrepeneurship" component={AboutEntrepeneurship} />
            <Route exact path="/Forum" component={Forum} />
            <Route exact path="/Calendar" component={Calendar} />
            <Route exact path="/Donate" component={Donate} />
            <Route exact path="/Profile" component={Profile} />
          </AuthRoute>
          <Route component={NotFound}/>
          </Switch>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
