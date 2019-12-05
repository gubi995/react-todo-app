import React from 'react';

import { TodoListItem } from '../TodoListItem';
import { Icon } from '../Icon';
import { ITodo } from '../../models/todo.model';

import classes from './TodoList.module.scss';

interface Props {
  todos: ITodo[];
}

function TodoList({ todos }: Props) {
  let componentToRender;

  if (todos && todos.length > 0) {
    componentToRender = todos.map(todo => <TodoListItem todo={todo} key={todo.id} />);
  } else {
    componentToRender = (
      <h2 className={classes.NothingToShow}>
        Seems like currently you have nothing to do. Create task by clicking the{' '}
        <Icon ariaLabel="plus-emoji" icon="➕" /> button in the right-bottom corner. Stay motivated and be productive.
        <Icon ariaLabel="wizard-emoji" icon="🧙🏿‍♂️" />
      </h2>
    );
  }

  return <div className={classes.TodoList}>{componentToRender}</div>;
}

export default TodoList;
