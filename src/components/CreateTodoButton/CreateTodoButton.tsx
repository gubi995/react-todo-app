import React from 'react';

import classes from './CreateTodoButton.module.scss';
import { useHistory } from 'react-router';

function CreateTodoButton() {
  const history = useHistory();

  const navigateToCreateTodoPage = () => {
    history.push('/todo/create');
  };

  return (
    <button className={classes.CreateTodoButton} onClick={navigateToCreateTodoPage}>
      <span role="img" aria-label="create-todo">
        ➕
      </span>
    </button>
  );
}

export default CreateTodoButton;
