import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Icon, HamburgerMenu } from '../../components';

import { authService } from '../../services';

import classes from './NavigationBar.module.scss';

function NavigationBar() {
  const [opened, setOpened] = useState(false);
  const history = useHistory();
  const navLinkClasses = [classes.MenuItem];

  if (!authService.user) {
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
    authService.user = null;

    history.push('/login');

    setOpened(false);
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
          <button type="button" className={classes.LogInOut} onClick={authService.user ? logOutHandler : logInHandler}>
            {authService.user ? 'Log out' : 'Log in'}
          </button>
        </HamburgerMenu>
        <NavLink className={classes.AppTitle} to="/">
          <Icon className={classes.Icon} ariaLabel="app-icon" icon="📝 TODO APP" />
        </NavLink>
      </nav>
    </header>
  );
}

export default NavigationBar;
