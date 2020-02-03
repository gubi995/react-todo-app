import React, { useContext } from 'react';

import { useHistory } from 'react-router';

import { NotificationContext } from '../../NotificationProvider';

import googleLogo from '../../../assets/logos/google_logo.svg';

import { Props } from '.';

import classes from './GoogleButton.module.scss';

function GoogleButton({ googleLoginAsync }: Props) {
  const history = useHistory();
  const { setNotification } = useContext(NotificationContext);

  const loginHandler = async () => {
    try {
      googleLoginAsync(() => {
        history.push('/todos');
      });
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
