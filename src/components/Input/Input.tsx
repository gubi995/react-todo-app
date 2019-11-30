import React from 'react';

import classes from './Input.module.scss';

function Input(props: any) {
  const { type, ...rest } = props;
  let component = <input className={classes.Input} {...props} />;

  if (type === 'select') {
    component = <select className={[classes.Input, classes.Select].join(' ')} {...rest} />;
  }

  return component;
}

export default Input;
