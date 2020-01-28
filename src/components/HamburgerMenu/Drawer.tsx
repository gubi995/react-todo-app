import React from 'react';

import { useSpring, animated as a } from 'react-spring';

import classes from './Drawer.module.scss';

interface Props {
  opened: boolean;
  children: React.ReactNode;
}

function Drawer({ opened, children }: Props) {
  const sideNavAnimation = useSpring({ transform: `translateX(${opened ? 0 : -150}%)` });

  return (
    <a.div style={sideNavAnimation} className={classes.Drawer}>
      <div className={classes.Container}>{children}</div>
    </a.div>
  );
}

export default Drawer;
