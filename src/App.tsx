import React from 'react';

import { NavigationBar, RoutesWrapper } from './components';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>

      <main>
        <RoutesWrapper />
      </main>
    </div>
  );
};

export default App;
