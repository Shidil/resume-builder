import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Resume from './pages/Resume/Resume';

const App = () => (
  <Switch>
    <Route exact path="/" component={Resume} />
    <Route exact path="/resume" component={Resume} />
  </Switch>
);

export default App;
