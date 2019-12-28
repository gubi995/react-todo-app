import React, { useRef, RefObject } from 'react';

import { Formik, Form, FormikHelpers, FieldArray, ArrayHelpers, FormikProps } from 'formik';

import { Prompt, useHistory } from 'react-router';

import { Icon, Button, InputWithLabel, PriorityOptions, SubTaskList, SubTaskControlButtons } from '../../components';
import { ITodo, ISubTask } from '../../models/todo.model';
import todoService from '../../services/todo-firebase-service';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

import classes from './TodoForm.module.scss';

interface Props {
  todo?: ITodo;
}

function TodoForm({ todo }: Props) {
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

  const deleteTodoHandler = async () => {
    if (todo) {
      await todoService.delete(todo.id);

      history.push('/todos');
    }
  };

  const onSubmit = async (values: ITodo, { setSubmitting, resetForm }: FormikHelpers<ITodo>) => {
    await todoService.save(values);

    setSubmitting(false);
    resetForm();

    history.push('/todos');
  };

  const onReset = (values: ITodo, { resetForm }: FormikHelpers<ITodo>) => {
    resetForm();
  };

  return (
    <Formik
      initialValues={todo || initialValues}
      onSubmit={onSubmit}
      onReset={onReset}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting, dirty }: FormikProps<ITodo>) => (
        <Form className={classes.TodoForm} noValidate autoComplete="off">
          <Prompt when={dirty} message="The TODO is not saved and will be lost. Are you sure to continue?" />

          <h3 className={classes.Heading}>
            TODO
            <Icon ariaLabel="page-not-found-icon" icon="✍" />
          </h3>

          <div className={classes.FieldsContainer}>
            <div>
              <h5>Task info</h5>
              <InputWithLabel name="title" label="Title" />
              <InputWithLabel type="select" name="priority" label="Priority">
                <PriorityOptions />
              </InputWithLabel>
              <InputWithLabel type="date" name="deadline" label="Deadline" />
              <InputWithLabel type="checkbox" checked={todo?.completed || false} name="completed" label="Completed" />
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
            <Button type="button" hidden={Boolean(!todo)} onClick={deleteTodoHandler}>
              Delete
            </Button>
            <Button type="reset" hidden={Boolean(todo)}>
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
