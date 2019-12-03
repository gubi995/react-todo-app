import React from 'react';

import { useHistory, useLocation } from 'react-router';

import classes from './CreateTodoButton.module.scss';

const CREATE_TODO_PAGE = '/todo/create';

function CreateTodoButton() {
  const history = useHistory();
  const location = useLocation();

  const navigateToCreateTodoPage = () => {
    history.push(CREATE_TODO_PAGE);
  };

  const isCreateTodoPage = () => {
    return location.pathname && !location.pathname.includes(CREATE_TODO_PAGE);
  };

  return (
    <button
      className={classes.CreateTodoButton}
      style={{ display: isCreateTodoPage() ? 'block' : 'none' }}
      onClick={navigateToCreateTodoPage}
    >
      <span role="img" aria-label="create-todo">
        ➕
      </span>
    </button>
  );
}

export default CreateTodoButton;
