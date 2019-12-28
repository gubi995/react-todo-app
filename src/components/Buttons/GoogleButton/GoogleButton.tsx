import React from 'react';

import googleLogo from '../../../assets/logos/google_logo.svg';

import classes from './GoogleButton.module.scss';

function GoogleButton() {
  return (
    <div className={classes.GoogleButton}>
      <img src={googleLogo} alt="Google logo" className={classes.Logo} />
      <span>Continue with Google</span>
    </div>
  );
}

export default GoogleButton;
