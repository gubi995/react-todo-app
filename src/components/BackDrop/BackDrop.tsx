import React, { HTMLProps } from 'react';

import classes from './BackDrop.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {
  opened: boolean;
}

function BackDrop({ opened, ...rest }: Props) {
  return <div style={{ display: opened ? 'flex' : 'none' }} className={classes.BackDrop} {...rest} />;
}

export default BackDrop;
