import React from 'react';

import { useSpring, animated } from 'react-spring';

import { Props } from '.';

import classes from './Toast.module.scss';

function Toast({ message, show }: Props) {
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
