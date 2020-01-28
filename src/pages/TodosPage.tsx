import React from 'react';

import { TodoList } from '../features';

function TodosPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TodoList />
    </div>
  );
}

export default TodosPage;
