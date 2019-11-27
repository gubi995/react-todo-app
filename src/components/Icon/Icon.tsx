import React from 'react';

type Props = {
  icon: string;
  ariaLabel: string;
  className?: string;
  rest?: any;
};

function Icon({ icon, ariaLabel, className, ...rest }: Props) {
  return (
    <span role="img" aria-label={ariaLabel} className={className} {...rest}>
      {icon}
    </span>
  );
}

export default Icon;
