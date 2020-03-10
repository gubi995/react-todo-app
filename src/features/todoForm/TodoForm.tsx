import React, { useRef, RefObject } from 'react';
import { Prompt, useHistory } from 'react-router';

import { Formik, Form, FormikHelpers, FieldArray, ArrayHelpers, FormikProps } from 'formik';
import { Icon } from '@iconify/react';
import writingHand from '@iconify/icons-twemoji/writing-hand';

import { Button, InputWithLabel } from '../../components';
import PriorityOptions from './PriorityOptions';
import SubTaskList from './SubTaskList';
import SubTaskControlButtons from './SubTaskControlButtons';

import { ITodo, ISubTask } from '../../models/todo.model';
import { Props } from '.';
import validationSchema from './validation-schema';

import classes from './TodoForm.module.scss';

function TodoForm({ todo, saveTodo, deleteTodo }: Props) {
  const subTaskListRef: RefObject<HTMLDivElement> = useRef(null);
  const history = useHistory();

  const scrollIfElementPresent = (getScrollOptions: (el: HTMLDivElement) => ScrollToOptions) => {
    const subTaskListEl = subTaskListRef.current;

    if (subTaskListEl) {
      subTaskListEl.scrollTo(getScrollOptions(subTaskListEl));
    }
  };

  const scrollHandler = (direction: string) => {
    scrollIfElementPresent((el: HTMLDivElement) => {
      const scrollOptions = {
        left: direction === 'right' ? el.scrollLeft + 250 : el.scrollLeft - 250,
        behavior: 'smooth',
      } as ScrollToOptions;

      return scrollOptions;
    });
  };

  const addSubTaskHandler = (push: (subTask: ISubTask) => void) => {
    push({ title: '', completed: false });

    setTimeout(() => {
      scrollIfElementPresent((el: HTMLDivElement) => {
        const scrollOptions = { left: el.scrollWidth, behavior: 'smooth' } as ScrollToOptions;

        return scrollOptions;
      });
    }, 0);
  };

  const deleteTodoHandler = () => {
    if (todo) {
      deleteTodo(todo.id);

      history.push('/todos');
    }
  };

  const submitHandler = (values: ITodo, { setSubmitting, resetForm }: FormikHelpers<ITodo>) => {
    saveTodo(values);

    setSubmitting(false);
    resetForm();

    history.push('/todos');
  };

  const resetHandler = (values: ITodo, { resetForm }: FormikHelpers<ITodo>) => {
    resetForm();
  };

  return (
    <Formik initialValues={todo} onSubmit={submitHandler} onReset={resetHandler} validationSchema={validationSchema}>
      {({ values, isSubmitting, dirty }: FormikProps<ITodo>) => (
        <Form className={classes.TodoForm} noValidate autoComplete="off">
          <Prompt when={dirty} message="The TODO is not saved and will be lost. Are you sure to continue?" />

          <h3 className={classes.Heading}>
            <span>TODO </span>
            <Icon icon={writingHand} />
          </h3>

          <div className={classes.FieldsContainer}>
            <div>
              <h5>Task info</h5>
              <InputWithLabel name="title" label="Title" />
              <InputWithLabel type="select" name="priority" label="Priority">
                <PriorityOptions />
              </InputWithLabel>
              <InputWithLabel type="date" name="deadline" label="Deadline" />
              <InputWithLabel type="checkbox" name="completed" label="Completed" />
              <h5>Assignee</h5>
              <InputWithLabel name="assignee.name" label="Name" />
              <InputWithLabel type="email" name="assignee.email" label="Email" />
            </div>

            <div className={classes.SubTaskContainer}>
              <FieldArray name="subTasks">
                {({ remove, push }: ArrayHelpers) => (
                  <>
                    <SubTaskList subTaskList={values.subTasks} ref={subTaskListRef} onRemove={remove} />
                    <SubTaskControlButtons addSubTask={() => addSubTaskHandler(push)} handleScroll={scrollHandler} />
                  </>
                )}
              </FieldArray>
            </div>
          </div>

          <div className={classes.ButtonsContainer}>
            <Button type="button" hidden={Boolean(!todo.id)} onClick={deleteTodoHandler}>
              Delete
            </Button>
            <Button type="reset" hidden={Boolean(todo.id)}>
              Reset
            </Button>
            <Button type="submit" primary disabled={isSubmitting}>
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default TodoForm;
