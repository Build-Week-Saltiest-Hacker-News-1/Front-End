import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import SignUp from "./components/useraccess/SignUp";
import SignIn from "./components/useraccess/SignIn";

import Navigation from "./components/nav/Navigation";
import Welcome from "./components/Welcome";
import TabbedView from "./components/TabbedView";

import { Container } from "reactstrap";

function App() {


  return (
    <div className="App">
      <Navigation />
      <Container>
        <Switch>

          <Route exact path="/" component={Welcome} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/dashboard" component={TabbedView} /> :
          
        </Switch>
      </Container>
    </div>
  );
}

export default App;

/*
<PrivateRoute exact path="/feed" component={Feed} />
<PrivateRoute exact path="/profile" component={Profile} />
*/