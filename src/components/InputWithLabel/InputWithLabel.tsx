import React from 'react';

import { Input } from '../Input';

import classes from './InputWithLabel.module.scss';

function InputWithLabel({ labelProps, inputProps }: { labelProps: any; inputProps: any }) {
  return (
    <div className={classes.InputWithLabel}>
      <label className={classes.Label} {...labelProps} />
      <Input {...inputProps} />
    </div>
  );
}

export default InputWithLabel;
