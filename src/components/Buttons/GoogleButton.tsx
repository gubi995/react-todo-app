import React, { useContext } from 'react';

import { useHistory } from 'react-router';

import { NotificationContext } from '../NotificationProvider';

import { authService } from '../../services';

import googleLogo from '../../assets/logos/google_logo.svg';

import classes from './GoogleButton.module.scss';

function GoogleButton() {
  const history = useHistory();
  const { setNotification } = useContext(NotificationContext);

  const loginHandler = async () => {
    try {
      await authService.googleLogin();

      history.push('/todos');
    } catch (error) {
      setNotification({ show: true, message: error.message });
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
