import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Landing from './Landing';
import Cases from './Cases';

const App = () => (
  <Router basename='/RadiologyCaseTracker'>
    <Switch>
      <Route path='/cases' >
        <Cases />
      </Route>
      <Route path='/' >
        <Landing />
      </Route>
    </Switch>
  </Router>
);

export default App;
