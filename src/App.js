import React from 'react';
import { Route, Link } from 'react-router-dom'

import Auth from './components/Auth';
import Feed from './components/Feed';
import Saved from './components/Saved';
import { Container } from 'reactstrap';

let auth = false;

function App() {
  return (
    <div className='App'>
      {
          auth ? 
          <Link to='/saved'>View Saved Posts</Link> :
          <Link to='/auth'>Log In or Sign Up</Link>
        };
      <Container>
        <Route exact path='/'>
          <Feed />
        </Route>
        <Route exact path='/auth'>
          <Auth />
        </Route>
        <Route exact path='/saved'>
          <Saved />
        </Route>
      </Container>
    </div>
  );
}

export default App;
