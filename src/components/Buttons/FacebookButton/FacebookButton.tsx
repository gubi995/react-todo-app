import React from 'react';

import { useHistory } from 'react-router';

import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

import FacebookIcon from './FacebookIcon';

import { Props } from '.';

import classes from './FacebookButton.module.scss';

function FacebookButton({ socialLoginAsync }: Props) {
  const history = useHistory();

  const loginHandler = async ({ name, email, id }: ReactFacebookLoginInfo) => {
    if (name && email && id) {
      socialLoginAsync({ name, email, socialId: id, provider: 'facebook' }, () => {
        history.push('/todos');
      });
    }
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_APP_ID!}
      fields="name,email"
      callback={loginHandler}
      cssClass={classes.FacebookButton}
      icon={<FacebookIcon />}
      textButton="Continue with Facebook"
      containerStyle={{ display: 'block' }}
    />
  );
}

export default FacebookButton;
