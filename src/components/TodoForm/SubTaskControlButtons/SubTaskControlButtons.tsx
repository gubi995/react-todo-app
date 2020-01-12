import React from 'react';

import { Icon } from '@iconify/react';
import pencil from '@iconify/icons-twemoji/pencil';
import leftDirection from '@iconify/icons-twemoji/backhand-index-pointing-left';
import rightDirection from '@iconify/icons-twemoji/backhand-index-pointing-right';

import { Button } from '../../Buttons/Button';

import classes from './SubTaskControlButtons.module.scss';

interface Props {
  handleScroll: (direction: string) => void;
  addSubTask: () => void;
}

function SubTaskControlButtons({ handleScroll, addSubTask }: Props) {
  return (
    <div className={classes.SubTaskControlButtons}>
      <Button type="button" className={classes.ControlButton} primary rounded onClick={() => handleScroll('left')}>
        <Icon icon={leftDirection} />
      </Button>
      <Button type="button" className={classes.ControlButton} primary rounded onClick={addSubTask}>
        <Icon icon={pencil} />
      </Button>
      <Button type="button" className={classes.ControlButton} primary rounded onClick={() => handleScroll('right')}>
        <Icon icon={rightDirection} />
      </Button>
    </div>
  );
}

export default SubTaskControlButtons;
