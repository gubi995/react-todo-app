import React from 'react';

import { Route, Redirect } from 'react-router';

import { Props } from '.';

function PrivateRoute({ isUserLoggedIn, children, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!isUserLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          );
        }

        return children;
      }}
    />
  );
}

export default PrivateRoute;
