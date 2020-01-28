import React, { useContext } from 'react';

import { useSpring, animated } from 'react-spring';

import { NotificationContext } from '../NotificationProvider';

import classes from './Toast.module.scss';

function Toast() {
  const { notification } = useContext(NotificationContext);
  const { show, message } = notification;

  const animation = useSpring({
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(-50%)' },
    reverse: !show,
    reset: show,
  });

  return (
    <animated.div style={animation} className={classes.Toast}>
      {message}
    </animated.div>
  );
}

export default Toast;
