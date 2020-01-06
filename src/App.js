import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Container } from 'reactstrap';

import Feed from './components/Feed';
import Saved from './components/Saved';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

let auth = false;

function App() {
  return (
    <div className='App'>
      <Navigation loggedIn={ auth } />
      <Container>
        <Route exact path='/'>
          <Feed />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/saved'>
          <Saved />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Container>
    </div>
  );
}

export default App;
