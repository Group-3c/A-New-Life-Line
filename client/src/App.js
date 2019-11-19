import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Forum from "./views/Forum/Forum"
import Calendar from "./views/Calendar/Calendar"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Register from "./views/Register/Register"


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Forum" component={Forum} />
        <Route exact path="/Calendar" component={Calendar} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>

      </Switch>
    </div>
  );
}

export default App;
