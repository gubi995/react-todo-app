import React from 'react';
import { useHistory } from 'react-router';

import { TodoForm } from '../features';

function TodoPage() {
  const { pathname } = useHistory().location;
  const id = pathname.split('/').pop() || '';

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TodoForm id={id} />
    </div>
  );
}

export default TodoPage;
