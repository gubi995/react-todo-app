import React from 'react';

import { Icon } from '@iconify/react';
import pencil from '@iconify/icons-twemoji/pencil';
import mage from '@iconify/icons-twemoji/man-mage-dark-skin-tone';

import classes from './EmptyTodoList.module.scss';

function EmptyTodoList() {
  return (
    <h2 className={classes.EmptyTodoList}>
      <span>Seems like currently you have nothing to do. Create task by clicking on the</span>
      <Icon icon={pencil} />
      <span> button in the right-bottom corner. Stay motivated and be productive. </span>
      <Icon icon={mage} />
    </h2>
  );
}

export default EmptyTodoList;
