import React from 'react';

import BackDrop from '../BackDrop';

import { Props } from '.';

import './LoadingIndicator.scss';

function LoadingIndicator({ loading }: Props) {
  return (
    <BackDrop opened={loading}>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </BackDrop>
  );
}

export default LoadingIndicator;
