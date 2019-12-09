import React, { Suspense } from 'react';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { LoadingIndicator } from '../LoadingIndicator';

const BoardPage = React.lazy(() => import('../../pages/BoardPage/BoardPage'));
const TodosPage = React.lazy(() => import('../../pages/TodosPage/TodosPage'));
const CreateTodoPage = React.lazy(() => import('../../pages/CreateTodoPage/CreateTodoPage'));
const PageNotFound = React.lazy(() => import('../../pages/PageNotFound/PageNotFound'));

function RoutesWrapper() {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    initial: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)', width: '100%', position: 'absolute', zIndex: -1 },
  });

  return (
    <>
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>
          <Suspense fallback={<LoadingIndicator />}>
            <Switch location={location}>
              <Route path="/" exact>
                <Redirect to="/todos" />
              </Route>
              <Route path="/board">
                <BoardPage />
              </Route>
              <Route path="/todos">
                <TodosPage />
              </Route>
              <Route path="/todo/create">
                <CreateTodoPage />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </Suspense>
        </animated.div>
      ))}
    </>
  );
}

export default RoutesWrapper;
