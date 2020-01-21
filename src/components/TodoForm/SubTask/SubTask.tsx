import React from 'react';

import { Icon } from '@iconify/react';
import crossMark from '@iconify/icons-twemoji/cross-mark';

import { InputWithLabel } from '../../Inputs/InputWithLabel';

import classes from './SubTask.module.scss';

interface Props {
  index: number;
  onRemove: () => void;
}

function SubTask({ index, onRemove }: Props) {
  return (
    <div className={classes.SubTask}>
      <InputWithLabel name={`subTasks.${index}.title`} label="Title" />
      <InputWithLabel type="checkbox" name={`subTasks.${index}.completed`} label="Completed" />
      <button type="button" className={classes.DeleteButton} onClick={onRemove}>
        <Icon icon={crossMark} />
      </button>
    </div>
  );
}

export default SubTask;
