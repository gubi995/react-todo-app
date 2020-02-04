import React from 'react';

import { RoutesWrapper, CreateTodoButton, GeneralErrorBoundary, Toast, NavigationBar } from './components';

function App() {
  return (
    <div>
      <NavigationBar />
      <GeneralErrorBoundary>
        <main style={{ overflowX: 'hidden' }}>
          <RoutesWrapper />
        </main>

        <footer>
          <CreateTodoButton />
          <Toast />
        </footer>
      </GeneralErrorBoundary>
    </div>
  );
}

export default App;
