import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Landing from './Landing';

const App = () => (
  <Router>
    <Switch>
      <Route path='/' >
        <Landing />
      </Route>
    </Switch>
  </Router>
);

export default App;
