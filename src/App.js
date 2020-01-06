import React from 'react';
import { Route, Link } from 'react-router-dom'

import Auth from './components/Auth';
import Feed from './components/Feed';
import Saved from './components/Saved';
import { Container } from 'reactstrap';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

let auth = false;

function App() {
  return (
    <div className='App'>
      {
          auth ? 
          <div><Link to='/saved'>View Saved Posts</Link></div> :
          <div><Link to='/signin'>Sign In</Link> or <Link to='/signup'>Sign Up</Link></div>
        };
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
      </Container>
    </div>
  );
}

export default App;
