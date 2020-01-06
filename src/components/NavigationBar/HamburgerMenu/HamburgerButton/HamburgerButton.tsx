import React from 'react';

import { useSpring, animated as a, config } from 'react-spring';

import classes from './HamburgerButton.module.scss';

interface Props {
  opened: boolean;
  clickHandler: () => void;
}

function HamburgerButton({ opened, clickHandler }: Props) {
  const topBarAnimation = useSpring({
    backgroundColor: opened ? 'lightseagreen' : 'white',
    transform: `translateY(${opened ? 10 : 0}px) rotate(${opened ? 45 : 0}deg)`,
    config: config.wobbly,
  });
  const middleBarAnimation = useSpring({
    opacity: opened ? 0 : 1,
    backgroundColor: opened ? 'lightseagreen' : 'white',
    transform: `translateX(${opened ? -50 : 0}%)`,
    config: config.wobbly,
  });
  const bottomBarAnimation = useSpring({
    backgroundColor: opened ? 'lightseagreen' : 'white',
    transform: `translateY(${opened ? -10 : 0}px) rotate(${opened ? -45 : 0}deg)`,
    config: config.wobbly,
  });

  return (
    <button type="button" className={classes.HamburgerButton} onClick={clickHandler}>
      <a.div style={topBarAnimation} className={classes.Bar} />
      <a.div style={middleBarAnimation} className={classes.Bar} />
      <a.div style={bottomBarAnimation} className={classes.Bar} />
    </button>
  );
}

export default HamburgerButton;
