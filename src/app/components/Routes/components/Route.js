import React from 'react';
import { Route } from 'react-router-dom';
import { elementType, bool } from 'prop-types';

import Background from '../../Background';

function AppRoute({ component: Component, withBackground, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps =>
        withBackground ? (
          <Background>
            <Component {...routeProps} />
          </Background>
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  );
}

AppRoute.propTypes = {
  component: elementType.isRequired,
  withBackground: bool
};

AppRoute.defaultProps = {
  withBackground: true
};

export default AppRoute;
