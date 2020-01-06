/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import classes from './BackDrop.module.scss';

interface Props {
  opened: boolean;
  clickHandler: () => void;
}

function BackDrop({ opened, clickHandler }: Props) {
  return <div style={{ display: opened ? 'block' : 'none' }} className={classes.BackDrop} onClick={clickHandler} />;
}

export default BackDrop;
