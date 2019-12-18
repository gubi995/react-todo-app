import React from 'react';

import { TodoListItem } from './TodoListItem';
import { ITodo } from '../../models/todo.model';
import { EmptyTodoList } from './EmptyTodoList';

import classes from './TodoList.module.scss';

interface Props {
  todos: ITodo[];
}

function TodoList({ todos }: Props) {
  let componentToRender;

  if (todos && todos.length > 0) {
    componentToRender = todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />);
  } else {
    componentToRender = <EmptyTodoList />;
  }

  return <div className={classes.TodoList}>{componentToRender}</div>;
}

export default TodoList;
