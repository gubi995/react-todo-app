import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationBar.module.scss';

function NavigationBar() {
  return (
    <header className={classes.Header}>
      <nav className={classes.NavigationBar}>
        <NavLink to="/">
          <span className={classes.Icon} role="img" aria-label="icon">
            📝
          </span>
        </NavLink>
        <NavLink className={classes.Link} activeClassName={classes.active} to="/todos">
          Things to do
        </NavLink>
        <NavLink className={classes.Link} activeClassName={classes.active} to="/board">
          Board
        </NavLink>
      </nav>
    </header>
  );
}

export default NavigationBar;
