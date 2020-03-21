import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Icon } from '@iconify/react';
import memoIcon from '@iconify/icons-twemoji/clipboard';

import HamburgerMenu from '../HamburgerMenu';
import LoadingProgressBar from '../LoadingProgressBar';

import { Props } from '.';

import classes from './NavigationBar.module.scss';

function NavigationBar({ isUserLoggedIn, logoutAsync }: Props) {
  const [opened, setOpened] = useState(false);
  const history = useHistory();
  const navLinkClasses = [classes.MenuItem];

  if (!isUserLoggedIn) {
    navLinkClasses.push(classes.disabled);
  }

  const clickHandler = () => {
    setOpened(!opened);
  };

  const logInHandler = () => {
    history.push('/login');

    setOpened(false);
  };

  const logOutHandler = () => {
    logoutAsync(() => {
      history.push('/login');

      setOpened(false);
    });
  };

  return (
    <header className={classes.Header}>
      <nav className={classes.NavigationBar}>
        <HamburgerMenu opened={opened} clickHandler={clickHandler}>
          <NavLink
            className={navLinkClasses.join(' ')}
            activeClassName={classes.active}
            to="/todos"
            onClick={() => setOpened(false)}
          >
            Things to do
          </NavLink>
          <NavLink
            className={navLinkClasses.join(' ')}
            activeClassName={classes.active}
            to="/board"
            onClick={() => setOpened(false)}
          >
            Board
          </NavLink>
          <button type="button" className={classes.LogInOut} onClick={isUserLoggedIn ? logOutHandler : logInHandler}>
            {isUserLoggedIn ? 'Log out' : 'Log in'}
          </button>
        </HamburgerMenu>
        <NavLink className={classes.AppTitle} to="/">
          <Icon className={classes.Icon} icon={memoIcon} />
          <span>TODO APP</span>
        </NavLink>
      </nav>
      <LoadingProgressBar />
    </header>
  );
}

export default NavigationBar;
