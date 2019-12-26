import React from 'react';

import { useHistory, useLocation } from 'react-router';
import { animated, useSpring } from 'react-spring';

import classes from './CreateTodoButton.module.scss';

const CREATE_TODO_PAGE = '/todo/create';
const EDIT_TODO_PAGE = '/todo/edit';

function CreateTodoButton() {
  const history = useHistory();
  const location = useLocation();

  const navigateToCreateTodoPage = () => {
    history.push(CREATE_TODO_PAGE);
  };

  const isHidden = () => {
    const hiddenPaths = [CREATE_TODO_PAGE, EDIT_TODO_PAGE];

    const hidden = hiddenPaths.some((path) => location.pathname.includes(path));

    return hidden;
  };

  const animation = useSpring({
    to: { opacity: 1, 'pointer-events': 'auto' },
    from: { opacity: 0, 'pointer-events': 'none' },
    reverse: isHidden(),
    reset: isHidden(),
  });

  return (
    <animated.div style={animation}>
      <button type="button" className={classes.CreateTodoButton} onClick={navigateToCreateTodoPage}>
        <span role="img" aria-label="create-todo">
          ➕
        </span>
      </button>
    </animated.div>
  );
}

export default CreateTodoButton;
