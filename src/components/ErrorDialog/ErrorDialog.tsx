import React from 'react';

import { useHistory } from 'react-router';

import Button from '../Buttons/Button';

import classes from './ErrorDialog.module.scss';
import BackDrop from '../BackDrop';

interface Props {
  message: string;
}

function ErrorDialog({ message }: Props) {
  const history = useHistory();

  const navigateToHomePage = () => {
    history.replace('/');
    document.location.reload();
  };

  return (
    <BackDrop opened>
      <div className={classes.ErrorDialog}>
        <h3>Something went wrong</h3>
        <h5>{message}</h5>
        <Button onClick={navigateToHomePage}>Reload</Button>
      </div>
    </BackDrop>
  );
}

export default ErrorDialog;
