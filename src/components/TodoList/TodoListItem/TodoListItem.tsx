import React, { KeyboardEvent } from 'react';

import { useHistory } from 'react-router';

import { Icon } from '../../Icon';
import { ITodo } from '../../../models/todo.model';
import Priority from '../../../models/priority.enum';

import classes from './TodoListItem.module.scss';

interface Props {
  todo: ITodo;
}

const getPriorityIcon = (priority: Priority) => {
  switch (priority) {
    case Priority.HIGH:
      return <Icon ariaLabel="task-priority" icon="🔴" />;
    case Priority.NORMAL:
      return <Icon ariaLabel="task-priority" icon="🟠" />;
    case Priority.LOW:
      return <Icon ariaLabel="task-priority" icon="🟢" />;
    default:
      return null;
  }
};

const getCompletedIcon = (completed: boolean) => (
  <Icon ariaLabel={completed ? 'task-completed' : 'task-uncompleted'} icon={completed ? '🌞' : '🌚'} />
);

function TodoListItem({ todo }: Props) {
  const history = useHistory();

  const navigateToEditPage = () => {
    history.push(`/todo/edit/${todo.id}`, { todo });
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const ENTER = 13;

    if (event.keyCode === ENTER) {
      navigateToEditPage();
    }
  };

  return (
    <div
      className={classes.TodoListItem}
      onClick={navigateToEditPage}
      onKeyDown={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      <div className={classes.Header}>
        <span className={classes.HeaderTitle}>{todo.title}</span>
        <div className={classes.HeaderInfo}>
          <span>{todo.deadline}</span>
          {getCompletedIcon(todo.completed)}
          {getPriorityIcon(todo.priority)}
        </div>
      </div>
      <div className={classes.SubTaskContainer}>
        {todo.subTasks.map((subTask) => (
          <span className={classes.SubTask} key={subTask.title}>
            {subTask.title}
            {subTask.completed ? '🌞' : '🌚'}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TodoListItem;
