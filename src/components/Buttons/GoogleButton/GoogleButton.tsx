import React from 'react';

import { useHistory } from 'react-router';

import { authService } from '../../../services';

import googleLogo from '../../../assets/logos/google_logo.svg';

import classes from './GoogleButton.module.scss';

function GoogleButton() {
  const history = useHistory();

  const loginHandler = async () => {
    try {
      await authService.googleLogin();

      history.push('/todos');
    } catch (error) {
      // TODO show the error in a toast
      console.log(error);
    }
  };

  return (
    <button type="button" className={classes.GoogleButton} onClick={loginHandler}>
      <img src={googleLogo} alt="Google logo" className={classes.Logo} />
      <span>Continue with Google</span>
    </button>
  );
}

export default GoogleButton;
