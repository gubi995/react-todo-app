import React from 'react';

import classes from './Button.module.scss';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  primary?: boolean;
  rounded?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

function Button({ primary, rounded, ...rest }: Props) {
  const buttonStyle = [classes.Button];

  if (primary) {
    buttonStyle.push(classes.primary);
  }

  if (rounded) {
    buttonStyle.push(classes.rounded);
  }

  return <button className={buttonStyle.join(' ')} {...rest} />;
}

export default Button;
