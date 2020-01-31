import React from 'react';

import { Route, Redirect } from 'react-router';

import { Props } from '.';

function PrivateRoute({ isUserLoggedIn, children, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={() => {
        return isUserLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
