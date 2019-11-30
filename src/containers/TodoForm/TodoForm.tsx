import React, { useRef, RefObject } from 'react';

import { Icon, Button, InputWithLabel } from '../../components';
import { Priority } from '../../models/todo.model';

import classes from './TodoForm.module.scss';

function PriorityOptions() {
  return (
    <>
      <option value={Priority.LOW}>{`${Priority.LOW} 🟢`}</option>
      <option value={Priority.NORMAL}>{`${Priority.NORMAL} 🟠`}</option>
      <option value={Priority.HIGH}>{`${Priority.HIGH} 🔴`}</option>
    </>
  );
}

function TodoForm() {
  const container: RefObject<any> = useRef(null);

  const handleScroll = (direction: string) => {
    const containerEl = container.current;

    if (direction === 'right') {
      container.current.scrollTo({ left: containerEl.scrollLeft + 250, behavior: 'smooth' });
    } else {
      container.current.scrollTo({ left: containerEl.scrollLeft - 250, behavior: 'smooth' });
    }
  };

  return (
    <div className={classes.TodoForm}>
      <h3 className={classes.Heading}>
        TODO <Icon ariaLabel="page-not-found-icon" icon="✍" />
      </h3>

      <div className={classes.FieldsContainer}>
        <div>
          <h5>Task info</h5>
          <InputWithLabel labelProps={{ children: 'Title' }} inputProps={{}} />
          <InputWithLabel
            labelProps={{ children: 'Priority' }}
            inputProps={{ type: 'select', children: <PriorityOptions /> }}
          />
          <InputWithLabel labelProps={{ children: 'Deadline' }} inputProps={{ type: 'date' }} />
          <InputWithLabel labelProps={{ children: 'Completed' }} inputProps={{ type: 'checkbox' }} />
          <h5>Assignee</h5>
          <InputWithLabel labelProps={{ children: 'Name' }} inputProps={{}} />
          <InputWithLabel labelProps={{ children: 'Email' }} inputProps={{ type: 'email' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h5>Sub-tasks</h5>
          <div className={classes.SubTaskContainer} ref={container}>
            <div className={classes.SubTask}>
              <InputWithLabel labelProps={{ children: 'Title' }} inputProps={{}} />
              <InputWithLabel labelProps={{ children: 'Completed' }} inputProps={{ type: 'checkbox' }} />
              <Icon className={classes.DeleteButton} ariaLabel="delete-sub-task" icon="❌" />
            </div>
            <div className={classes.SubTask}>
              <InputWithLabel labelProps={{ children: 'Title' }} inputProps={{}} />
              <InputWithLabel labelProps={{ children: 'Completed' }} inputProps={{ type: 'checkbox' }} />
            </div>
            <div className={classes.SubTask}>
              <InputWithLabel labelProps={{ children: 'Title' }} inputProps={{}} />
              <InputWithLabel labelProps={{ children: 'Completed' }} inputProps={{ type: 'checkbox' }} />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '1em' }}>
            <Button primary rounded onClick={() => handleScroll('left')}>
              <Icon ariaLabel="previous-sub-task" icon="👈" />
            </Button>
            <Button primary rounded>
              <Icon ariaLabel="new-sub-task" icon="➕" />
            </Button>
            <Button primary rounded onClick={() => handleScroll('right')}>
              <Icon ariaLabel="next-sub-task" icon="👉" />
            </Button>
          </div>
        </div>
      </div>

      <div className={classes.ButtonsContainer}>
        <Button>Reset</Button>
        <Button primary>Save</Button>
      </div>
    </div>
  );
}

export default TodoForm;
