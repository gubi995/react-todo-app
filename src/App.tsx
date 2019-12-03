import React from 'react';

import { NavigationBar, RoutesWrapper, CreateTodoButton } from './components';

function App() {
  return (
    <div>
      <NavigationBar />

      <main>
        <RoutesWrapper />
      </main>

      <footer>
        <CreateTodoButton />
      </footer>
    </div>
  );
}

export default App;
