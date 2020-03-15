import React from 'react';

import classes from './FacebookIcon.module.scss';

const FacebookIcon = () => {
  return (
    <img className={classes.FacebookIcon} src={`${process.env.PUBLIC_URL}/facebook-logo.svg`} alt="Facebook logo" />
  );
};

export default FacebookIcon;
