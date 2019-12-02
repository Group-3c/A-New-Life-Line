import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import FreshOut from "./views/FreshOut/FreshOut"
import About from "./views/About/About"
import AboutParadigmShift from "./views/AboutParadigmShift/AboutParadigmShift"
import AboutSkillBuilding from "./views/AboutSkillBuilding/AboutSkillBuilding"
import AboutEntrepeneurship from "./views/AboutEntrepeneurship/AboutEntrepeneurship"
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
      <div className='content-wrap'>
        <Switch>
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/About" component={About} />
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <AuthRoute>
            <Header />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/FreshOut" component={FreshOut} />
            <Route exact path="/AboutParadigmShift" component={AboutParadigmShift} />
            <Route exact path="/AboutSkillBuilding" component={AboutSkillBuilding} />
            <Route exact path="/AboutEntrepeneurship" component={AboutEntrepeneurship} />
            <Route exact path="/VideoChatJoin" component={VideoChatJoin} />
            <Route exact path="/VideoChatHost" component={VideoChatHost} />
            <Route exact path="/Calendar" component={Calendar} />
            <Route exact path="/Forum" component={Forum} />
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
