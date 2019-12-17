import React from 'react';

import { TodoList } from '../../components';
import { ITodo } from '../../models/todo.model';
import Priority from '../../models/priority.enum';

function TodosPage() {
  const todo: ITodo = {
    id: 0,
    title: 'Do this and that',
    completed: false,
    deadline: new Date().toLocaleDateString('en-CA'),
    assignee: { name: 'Adrian Gruber', email: 'adrian@gmail.com' },
    priority: Priority.HIGH,
    subTasks: [
      { title: 'Call the police', completed: false },
      { title: 'Tidy up', completed: true },
      { title: 'Wash the dishes', completed: false },
      { title: 'Buy a bread', completed: true },
      { title: 'Finish up this feature', completed: false },
    ],
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TodoList todos={[todo]} />
    </div>
  );
}

export default TodosPage;
