import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
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


const App = () => {
  return (
    <div className='page-container'>
      <Header />

      <div className='content-wrap'>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Forum" component={Forum} />
          <Route exact path="/Calendar" component={Calendar} />
          <Route exact path="/Donate" component={Donate} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/VideoChatJoin" component={VideoChatJoin} />
            <Route exact path="/VideoChatHost" component={VideoChatHost} />
            <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route component={NotFound}/>

        </Switch>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
