import React from 'react';

import {
  RoutesWrapper,
  CreateTodoButton,
  GeneralErrorBoundary,
  Toast,
  NotificationProvider,
  NavigationBar,
} from './components';

function App() {
  return (
    <div>
      <NavigationBar />
      <GeneralErrorBoundary>
        <NotificationProvider>
          <main style={{ overflowX: 'hidden' }}>
            <RoutesWrapper />
          </main>

          <footer>
            <CreateTodoButton />
            <Toast />
          </footer>
        </NotificationProvider>
      </GeneralErrorBoundary>
    </div>
  );
}

export default App;
