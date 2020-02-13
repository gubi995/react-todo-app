import React from 'react';

import {
  RoutesWrapper,
  CreateTodoButton,
  GeneralErrorBoundary,
  Toast,
  NavigationBar,
  SmartLoadingIndicator,
  ScrollToTop,
} from './components';

function App() {
  return (
    <div>
      <ScrollToTop />
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
      <SmartLoadingIndicator />
    </div>
  );
}

export default App;
