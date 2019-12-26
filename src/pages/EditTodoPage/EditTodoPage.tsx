import React from 'react';
import { useHistory } from 'react-router';

import { TodoForm } from '../../containers';

function EditTodoPage() {
  const { state } = useHistory().location;

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TodoForm todo={state && state.todo} />
    </div>
  );
}

export default EditTodoPage;
