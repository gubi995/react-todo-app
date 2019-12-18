import React, { useEffect, useState } from 'react';

import { TodoListItem } from './TodoListItem';
import { ITodo } from '../../models/todo.model';
import { EmptyTodoList } from './EmptyTodoList';
import todoService from '../../services/todo-firebase-service';

import classes from './TodoList.module.scss';

function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    todoService.findAll().then((fetchedTodos: ITodo[]) => {
      setTodos(fetchedTodos);
      setLoading(false);
    });
  }, []);

  if (loading) {
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
