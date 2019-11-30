import React from 'react';

import classes from './Button.module.scss';

type Props = {
  primary?: boolean;
  rounded?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

function Button(props: Props & React.HTMLProps<HTMLButtonElement>) {
  const { primary, rounded, ...rest } = props;
  const buttonStyle = [classes.Button];

  if (props.primary) {
    buttonStyle.push(classes.primary);
  }

  if (props.rounded) {
    buttonStyle.push(classes.rounded);
  }

  return <button className={buttonStyle.join(' ')} {...rest} />;
}

export default Button;
