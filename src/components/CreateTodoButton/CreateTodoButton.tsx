import React from 'react';

import { useHistory, useLocation } from 'react-router';
import { animated, useSpring } from 'react-spring';

import classes from './CreateTodoButton.module.scss';

const CREATE_TODO_PAGE = '/todo/create';

function CreateTodoButton() {
  const history = useHistory();
  const location = useLocation();

  const navigateToCreateTodoPage = () => {
    history.push(CREATE_TODO_PAGE);
  };

  const isCreateTodoPage = () => {
    return !!(location.pathname && !location.pathname.includes(CREATE_TODO_PAGE));
  };

  const animation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reverse: !isCreateTodoPage(),
    reset: !isCreateTodoPage(),
  });

  return (
    <animated.div style={animation}>
      <button className={classes.CreateTodoButton} onClick={navigateToCreateTodoPage}>
        <span role="img" aria-label="create-todo">
          ➕
        </span>
      </button>
    </animated.div>
  );
}

export default CreateTodoButton;
