import React, { Suspense } from 'react';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import LoginPage from '../../pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import LoadingIndicator from '../LoadingIndicator';

const BoardPage = React.lazy(() => import('../../pages/BoardPage'));
const TodosPage = React.lazy(() => import('../../pages/TodosPage'));
const TodoPage = React.lazy(() => import('../../pages/TodoPage'));
const PageNotFound = React.lazy(() => import('../../pages/PageNotFound'));

function RoutesWrapper() {
  const location = useLocation();
  const transitions = useTransition(location, (loc) => loc.pathname, {
    initial: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%,0,0)',
      width: '100%',
      position: 'absolute',
      zIndex: -1,
    },
  });

  return (
    <Suspense fallback={<LoadingIndicator />}>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/" exact>
              <Redirect to="/todos" />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/board">
              <BoardPage />
            </PrivateRoute>
            <PrivateRoute path="/todos">
              <TodosPage />
            </PrivateRoute>
            <PrivateRoute path="/todo/:id">
              <TodoPage />
            </PrivateRoute>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </Suspense>
  );
}

export default RoutesWrapper;
