import React from 'react';

import { Button } from '../../Button';
import { Icon } from '../../Icon';

import classes from './SubTaskControlButtons.module.scss';

interface Props {
  handleScroll: (direction: string) => void;
  addSubTask: () => void;
}

function SubTaskControlButtons({ handleScroll, addSubTask }: Props) {
  return (
    <div className={classes.SubTaskControlButtons}>
      <Button type="button" primary rounded onClick={() => handleScroll('left')}>
        <Icon ariaLabel="previous-sub-task" icon="👈" />
      </Button>
      <Button type="button" primary rounded onClick={addSubTask}>
        <Icon ariaLabel="new-sub-task" icon="➕" />
      </Button>
      <Button type="button" primary rounded onClick={() => handleScroll('right')}>
        <Icon ariaLabel="next-sub-task" icon="👉" />
      </Button>
    </div>
  );
}

export default SubTaskControlButtons;
