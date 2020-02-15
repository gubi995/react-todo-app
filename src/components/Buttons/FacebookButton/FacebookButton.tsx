import React from 'react';

import { useHistory } from 'react-router';

import { Props } from '.';

import classes from './FacebookButton.module.scss';

function FacebookButton({ facebookLoginAsync }: Props) {
  const history = useHistory();

  const loginHandler = async () => {
    facebookLoginAsync(() => {
      history.push('/todos');
    });
  };

  return (
    <button type="button" className={classes.FacebookButton} onClick={loginHandler}>
      <img src={`${process.env.PUBLIC_URL}/facebook-logo.svg`} alt="Facebook logo" className={classes.Logo} />
      <span>Continue with Facebook</span>
    </button>
  );
}

export default FacebookButton;
