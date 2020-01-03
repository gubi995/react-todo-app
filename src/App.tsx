import React from 'react';

import { NavigationBar, RoutesWrapper, CreateTodoButton, GeneralErrorBoundary, Toast } from './components';
import { NotificationProvider } from './containers';

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
