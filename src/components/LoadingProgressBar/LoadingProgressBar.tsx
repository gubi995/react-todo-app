import React from 'react';

import classes from './LoadingProgressBar.module.scss';

import { Props } from './';

function LoadingProgressBar({ loading }: Props) {
  return (
    <div className={classes.LoadingProgressBar} style={{ display: loading ? 'block' : 'none' }}>
      <div className={classes.FilledArea} />
    </div>
  );
}

export default LoadingProgressBar;
