import React, { Suspense } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { LoadingIndicator } from '../LoadingIndicator';

const BoardPage = React.lazy(() => import('../../pages/BoardPage/BoardPage'));
const TodosPage = React.lazy(() => import('../../pages/TodosPage/TodosPage'));

function RoutesWrapper() {
  return (
    <div>
      <Switch>
        <Suspense fallback={<LoadingIndicator />}>
          <Route path="/" exact>
            <Redirect to="/todos" />
          </Route>
          <Route path="/board">
            <BoardPage />
          </Route>
          <Route path="/todos">
            <TodosPage />
          </Route>
        </Suspense>
      </Switch>
    </div>
  );
}

export default RoutesWrapper;
