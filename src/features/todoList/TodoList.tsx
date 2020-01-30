import React, { useEffect } from 'react';

import TodoListItem from './TodoListItem';
import EmptyTodoList from './EmptyTodoList';

import { Props } from '.';

import classes from './TodoList.module.scss';

function TodoList({ todos, loaded, initTodosAsync }: Props) {
  useEffect(() => {
    if (!loaded) {
      initTodosAsync();
    }
  }, [loaded, initTodosAsync]);

  if (!loaded) {
    return <h2>Loading...</h2>;
  }

  let component;

  if (todos && todos.length > 0) {
    component = todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />);
  } else {
    component = <EmptyTodoList />;
  }

  return <div className={classes.TodoList}>{component}</div>;
}

export default TodoList;
