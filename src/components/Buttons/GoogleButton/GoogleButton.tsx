import React from 'react';

import { useHistory } from 'react-router';

import googleLogo from '../../../assets/logos/google_logo.svg';

import { Props } from '.';

import classes from './GoogleButton.module.scss';

function GoogleButton({ googleLoginAsync }: Props) {
  const history = useHistory();

  const loginHandler = async () => {
    googleLoginAsync(() => {
      history.push('/todos');
    });
  };

  return (
    <button type="button" className={classes.GoogleButton} onClick={loginHandler}>
      <img src={googleLogo} alt="Google logo" className={classes.Logo} />
      <span>Continue with Google</span>
    </button>
  );
}

export default GoogleButton;
