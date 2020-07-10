import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Routes } from '../../constants';
import Home from '../../screens/Home';

import Route from './components/Route';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Redirect to={Routes.HOME} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
