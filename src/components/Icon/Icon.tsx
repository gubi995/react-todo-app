import React from 'react';

interface Props extends React.HTMLProps<HTMLSpanElement> {
  icon: string;
  ariaLabel: string;
}

function Icon({ icon, ariaLabel, ...rest }: Props) {
  return (
    <span role="img" aria-label={ariaLabel} {...rest}>
      {icon}
    </span>
  );
}

export default Icon;
