import React from 'react';

import { NavigationBar, RoutesWrapper, CreateTodoButton, GeneralErrorBoundary } from './components';

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
        </footer>
      </GeneralErrorBoundary>
    </div>
  );
}

export default App;
