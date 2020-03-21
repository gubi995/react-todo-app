import React from 'react';

import BackDrop from '../BackDrop';

import './LoadingIndicator.scss';

function LoadingIndicator() {
  return (
    <BackDrop opened>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </BackDrop>
  );
}

export default LoadingIndicator;
