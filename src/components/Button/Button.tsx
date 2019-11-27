import React from 'react';

import classes from './Button.module.scss';

type Props = {
  primary?: boolean;
  children?: string;
};

function Button(props: Props) {
  const buttonStyle = Array(classes.Button);

  if (props.primary) {
    buttonStyle.push(classes.primary);
  }

  return <button className={buttonStyle.join(' ')} {...props} />;
}

export default Button;
