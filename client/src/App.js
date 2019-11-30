import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Forum from "./views/Forum/Forum"
import Calendar from "./views/Calendar/Calendar"
import Donate from "./views/Donate/Donate"
import Profile from "./views/Profile/Profile"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './app.css';
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import AuthRoute from "./components/AuthRoute"
import 'semantic-ui-css/semantic.min.css'


const App = () => {
  return (
    <div className='page-container'>
      <Header />
      <div className='content-wrap'>
        <Switch>
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <AuthRoute>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Calendar" component={Calendar} />
            <Route exact path="/Forum" component={Forum} />
          </AuthRoute>
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
