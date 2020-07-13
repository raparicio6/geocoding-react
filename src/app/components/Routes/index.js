import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Routes } from '../../constants';
import Header from '../Header';
import Home from '../../screens/Home';
import Addresses from '../../screens/Addresses';
import Map from '../../screens/Map';
import Locations from '../../screens/Locations';

import Route from './components/Route';

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={Routes.ADDRESSES} component={Addresses} />
        <Route exact path={Routes.LOCATIONS} component={Locations} />
        <Route exact path={Routes.MAP} withBackground={false} component={Map} />
        <Route exact path={Routes.HOME} component={Home} />
        <Redirect to={Routes.HOME} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
