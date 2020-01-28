import React from 'react';

import SubTask from './SubTask';

import { ISubTask } from '../../models/todo.model';

import classes from './SubTaskList.module.scss';

interface Props {
  subTaskList: ISubTask[];
  onRemove: (index: number) => void;
}

const SubTaskList = React.forwardRef(({ subTaskList, onRemove }: Props, ref: React.Ref<HTMLDivElement>) => {
  let componentToRender;

  if (subTaskList && subTaskList.length > 0) {
    componentToRender = (
      <div className={classes.SubTaskList} ref={ref}>
        {subTaskList.map((_, index: number) => (
          <SubTask key={index} index={index} onRemove={() => onRemove(index)} />
        ))}
      </div>
    );
  } else {
    componentToRender = (
      <h4 className={classes.NoSubTaskHeading}>You have no sub-task. Let&apos; s create one, shall we? </h4>
    );
  }

  return (
    <>
      <h5>Sub-tasks</h5>
      {componentToRender}
    </>
  );
});

export default SubTaskList;
