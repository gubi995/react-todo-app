import React, { HTMLProps } from 'react';

import { useField } from 'formik';

import { Input } from '../Input';

import classes from './InputWithLabel.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
}

function InputWithLabel({ label, ...props }: Props) {
  const [field, meta] = useField(props.name!);

  return (
    <div className={classes.InputWithLabel}>
      <label className={classes.Label}>{label}</label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? <div className={classes.Error}>{meta.error}</div> : null}
    </div>
  );
}

export default InputWithLabel;
