import React, { HTMLProps } from 'react';

import { useField } from 'formik';

import Input from './Input';

import classes from './InputWithLabel.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
  name: string;
}

function InputWithLabel({ label, name, ...props }: Props) {
  const [field, meta] = useField(name!);

  return (
    <div className={classes.InputWithLabel}>
      <label className={classes.Label} htmlFor={name}>
        {label}
      </label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? <div className={classes.Error}>{meta.error}</div> : null}
    </div>
  );
}

export default InputWithLabel;
