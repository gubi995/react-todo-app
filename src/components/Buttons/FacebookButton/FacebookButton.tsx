import React from 'react';

import facebookLogo from '../../../assets/logos/facebook-logo.svg';

import classes from './FacebookButton.module.scss';

function FacebookButton() {
  return (
    <div className={classes.FacebookButton}>
      <img src={facebookLogo} alt="Facebook logo" className={classes.Logo} />
      <span>Continue with Facebook</span>
    </div>
  );
}

export default FacebookButton;
