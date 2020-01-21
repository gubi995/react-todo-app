import React from 'react';

import classes from './Input.module.scss';

interface Props {
  type?: string;
  value: any;
}

function Input(props: Props) {
  const { type, value, ...rest } = props;
  let component = <input className={classes.Input} {...props} />;

  if (type === 'select') {
    component = <select className={[classes.Input, classes.Select].join(' ')} {...rest} />;
  }

  if (type === 'checkbox') {
    component = <input className={classes.Input} checked={value} {...props} />;
  }

  return component;
}

export default Input;
