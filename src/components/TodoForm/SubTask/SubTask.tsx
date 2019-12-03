import React from 'react';

import { InputWithLabel } from '../../InputWithLabel';
import { Icon } from '../../Icon';

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
      <Icon className={classes.DeleteButton} onClick={onRemove} ariaLabel="delete-sub-task" icon="❌" />
    </div>
  );
}

export default SubTask;
