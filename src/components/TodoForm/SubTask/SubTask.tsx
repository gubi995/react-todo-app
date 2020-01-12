import React from 'react';

import { Icon } from '@iconify/react';
import crossMark from '@iconify/icons-twemoji/cross-mark';

import { InputWithLabel } from '../../Inputs/InputWithLabel';
import { ISubTask } from '../../../models/todo.model';

import classes from './SubTask.module.scss';

interface Props {
  subTask: ISubTask;
  index: number;
  onRemove: () => void;
}

function SubTask({ subTask, index, onRemove }: Props) {
  return (
    <div className={classes.SubTask}>
      <InputWithLabel name={`subTasks.${index}.title`} label="Title" />
      <InputWithLabel
        type="checkbox"
        checked={subTask.completed}
        name={`subTasks.${index}.completed`}
        label="Completed"
      />
      <button type="button" className={classes.DeleteButton} onClick={onRemove}>
        <Icon icon={crossMark} />
      </button>
    </div>
  );
}

export default SubTask;
