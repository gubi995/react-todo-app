import React from 'react';

import { InputWithLabel } from '../../Inputs/InputWithLabel';
import { Icon } from '../../Icon';
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
      <Icon className={classes.DeleteButton} onClick={onRemove} ariaLabel="delete-sub-task" icon="❌" />
    </div>
  );
}

export default SubTask;
