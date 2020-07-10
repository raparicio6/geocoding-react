import React from 'react';
import { Route } from 'react-router-dom';
import { elementType } from 'prop-types';

function AppRoute({ component: Component, ...props }) {
  return <Route {...props} render={routeProps => <Component {...routeProps} />} />;
}

AppRoute.propTypes = {
  component: elementType.isRequired
};

export default AppRoute;
