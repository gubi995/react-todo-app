import React, { useRef, RefObject } from 'react';

import { Formik, Form, FormikState, FormikHelpers, FieldArray, ArrayHelpers } from 'formik';

import { Icon, Button, InputWithLabel, PriorityOptions, SubTaskList, SubTaskControlButtons } from '../../components';
import { ITodo } from '../../models/todo.model';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

import classes from './TodoForm.module.scss';

function TodoForm() {
  const subTaskListRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollHandler = (direction: string) => {
    const subTaskListEl = subTaskListRef.current;

    if (subTaskListEl) {
      subTaskListEl.scrollTo({
        left: direction === 'right' ? subTaskListEl.scrollLeft + 250 : subTaskListEl.scrollLeft - 250,
        behavior: 'smooth',
      });
    }
  };

  const onSubmit = (values: ITodo, { setSubmitting, resetForm }: FormikHelpers<ITodo>) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      resetForm();
    }, 2000);
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
      {({ values, isSubmitting }: FormikState<ITodo>) => {
        return (
          <Form className={classes.TodoForm}>
            <h3 className={classes.Heading}>
              TODO <Icon ariaLabel="page-not-found-icon" icon="✍" />
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
                  {({ remove, insert }: ArrayHelpers) => (
                    <>
                      <SubTaskList subTaskList={values.subTasks} ref={subTaskListRef} onRemove={remove} />
                      <SubTaskControlButtons
                        addSubTask={() => insert(0, { title: '', completed: false })}
                        handleScroll={scrollHandler}
                      />
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
        );
      }}
    </Formik>
  );
}

export default TodoForm;
