import React from 'react';

import { useHistory } from 'react-router';

import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import { Props } from '.';

import classes from './GoogleButton.module.scss';

function GoogleButton({ socialLoginAsync }: Props) {
  const history = useHistory();

  const loginHandler = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const { name, email, googleId } = (response as GoogleLoginResponse).profileObj;

    if (name && email && googleId) {
      socialLoginAsync({ name, email, socialId: googleId, provider: 'google' }, () => {
        history.push('/todos');
      });
    }
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
      render={(renderProps) => (
        <button type="button" className={classes.GoogleButton} onClick={renderProps.onClick}>
          <img src={`${process.env.PUBLIC_URL}/google_logo.svg`} alt="Google logo" className={classes.Logo} />
          <span>Continue with Google</span>
        </button>
      )}
      onSuccess={loginHandler}
      onFailure={console.log}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default GoogleButton;
