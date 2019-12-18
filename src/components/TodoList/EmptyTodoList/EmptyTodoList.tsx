import React from 'react';

import { Icon } from '../../Icon';

import classes from './EmptyTodoList.module.scss';

function EmptyTodoList() {
  return (
    <h2 className={classes.EmptyTodoList}>
      <span>Seems like currently you have nothing to do. Create task by clicking the </span>
      <Icon ariaLabel="plus-emoji" icon="➕" />
      <span> button in the right-bottom corner. Stay motivated and be productive.</span>
      <Icon ariaLabel="wizard-emoji" icon="🧙🏿‍♂️" />
    </h2>
  );
}

export default EmptyTodoList;
