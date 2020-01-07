import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import PrivateRoute from "./components/PrivateRoute";

import Feed from "./components/Feed";
import Saved from "./components/Saved";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";

let auth = false;

function App() {
  return (
    <div className="App">
      <Navigation loggedIn={auth} />
      <Container>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <PrivateRoute exact path="/feed" component={Feed} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
