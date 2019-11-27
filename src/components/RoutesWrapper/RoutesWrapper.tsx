import React, { Suspense } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { LoadingIndicator } from '../LoadingIndicator';

const BoardPage = React.lazy(() => import('../../pages/BoardPage/BoardPage'));
const TodosPage = React.lazy(() => import('../../pages/TodosPage/TodosPage'));
const CreateTodoPage = React.lazy(() => import('../../pages/CreateTodoPage/CreateTodoPage'));
const PageNotFound = React.lazy(() => import('../../pages/PageNotFound/PageNotFound'));

function RoutesWrapper() {
  return (
    <div>
      <Suspense fallback={<LoadingIndicator />}>
        <Switch>
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
    </div>
  );
}

export default RoutesWrapper;
