import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from 'react-redux'

//import Feed from "./components/Feed";
//import Saved from "./components/Saved";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
//import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import TabbedView from "./components/TabbedView";


function App() {

  const loggedIn = true //useSelector(state => state.isLoggedIn)


  return (
    <div className="App">
      <Navigation loggedIn={loggedIn}/>
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