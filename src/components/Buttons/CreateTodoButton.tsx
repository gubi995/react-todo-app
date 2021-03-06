import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { animated, useSpring } from 'react-spring';

import { Icon } from '@iconify/react';
import pencil from '@iconify/icons-twemoji/pencil';

import classes from './CreateTodoButton.module.scss';

const CREATE_TODO_PAGE = '/todo/create';
const EDIT_TODO_PAGE = '/todo/edit';
const LOGIN_PAGE = '/login';

function CreateTodoButton() {
  const history = useHistory();
  const location = useLocation();

  const navigateToCreateTodoPage = () => {
    history.push(CREATE_TODO_PAGE);
  };

  const isHidden = () => {
    const hiddenPaths = [CREATE_TODO_PAGE, EDIT_TODO_PAGE, LOGIN_PAGE];

    const hidden = hiddenPaths.some((path) => location.pathname.includes(path));

    return hidden;
  };

  const animation = useSpring({
    to: { opacity: 1, pointerEvents: 'auto' },
    from: { opacity: 0, pointerEvents: 'none' },
    reverse: isHidden(),
    reset: isHidden(),
    immediate: location.pathname.includes(LOGIN_PAGE),
  });

  return (
    <animated.div style={animation}>
      <button
        type="button"
        className={classes.CreateTodoButton}
        onClick={navigateToCreateTodoPage}
        aria-label="Create todo"
      >
        <Icon className={classes.Icon} icon={pencil} />
      </button>
    </animated.div>
  );
}

export default CreateTodoButton;
