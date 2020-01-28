import React, { useContext } from 'react';

import { useHistory } from 'react-router';

import { NotificationContext } from '../NotificationProvider';

import { authService } from '../../services';

import facebookLogo from '../../assets/logos/facebook-logo.svg';

import classes from './FacebookButton.module.scss';

function FacebookButton() {
  const history = useHistory();
  const { setNotification } = useContext(NotificationContext);

  const loginHandler = async () => {
    try {
      await authService.facebookLogin();

      history.push('/todos');
    } catch (error) {
      setNotification({ show: true, message: error.message });
    }
  };

  return (
    <button type="button" className={classes.FacebookButton} onClick={loginHandler}>
      <img src={facebookLogo} alt="Facebook logo" className={classes.Logo} />
      <span>Continue with Facebook</span>
    </button>
  );
}

export default FacebookButton;
