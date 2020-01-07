import React from 'react';

import { Route, Redirect, RouteProps } from 'react-router';

import { authService } from '../../services';

interface Props extends RouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        const isUserLoggedIn = !!authService.user;

        return isUserLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;