import React from 'react';

import classes from './Button.module.scss';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  primary?: boolean;
  rounded?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

function Button({ primary, rounded, className, ...rest }: Props) {
  const buttonStyle = [classes.Button];

  if (className) {
    buttonStyle.push(className);
  }

  if (primary) {
    buttonStyle.push(classes.primary);
  }

  if (rounded) {
    buttonStyle.push(classes.rounded);
  }

  return <button type="button" className={buttonStyle.join(' ')} {...rest} />;
}

export default Button;
