import React, { useRef, RefObject } from 'react';

import { Formik, Form, FormikState, FormikHelpers, FieldArray, ArrayHelpers } from 'formik';

import { Icon, Button, InputWithLabel, PriorityOptions, SubTaskList, SubTaskControlButtons } from '../../components';
import { ITodo, ISubTask } from '../../models/todo.model';
import todoService from '../../services/todo-firebase-service';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

import classes from './TodoForm.module.scss';

function TodoForm() {
  const subTaskListRef: RefObject<HTMLDivElement> = useRef(null);

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

  const onSubmit = async (values: ITodo, { setSubmitting, resetForm }: FormikHelpers<ITodo>) => {
    await todoService.save(values);
    setSubmitting(false);
    resetForm();
  };

  const onReset = (values: ITodo, { resetForm }: FormikHelpers<ITodo>) => {
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      onReset={onReset}
      validationSchema={validationSchema}
      novalidate
      autocomplete="off"
    >
      {({ values, isSubmitting }: FormikState<ITodo>) => (
        <Form className={classes.TodoForm}>
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
            <Button type="reset">Reset</Button>
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
