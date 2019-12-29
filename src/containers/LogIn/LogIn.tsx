import React from 'react';

import { useHistory } from 'react-router';

import { Formik, Form, FormikHelpers, FormikProps } from 'formik';

import { FacebookButton, GoogleButton, InputWithLabel, Button } from '../../components';
import { authService } from '../../services';
import { ILogInUser } from '../../models/user.model';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

import classes from './LogIn.module.scss';

function LogIn() {
  const history = useHistory();

  const submitHandler = async (
    { email, password }: ILogInUser,
    { setSubmitting, resetForm }: FormikHelpers<ILogInUser>
  ) => {
    try {
      await authService.emailAndPasswordLogin(email, password);

      setSubmitting(false);
      resetForm();
      history.push('/todos');
    } catch (error) {
      // TODO show the error in a toast
      console.log(error);
    }
  };

  return (
    <div className={classes.LogIn}>
      <h2 className={classes.Heading}>Log in</h2>
      <div className={classes.Container}>
        <FacebookButton />
        <GoogleButton />

        <div className={classes.SeparatorContainer}>
          <div className={classes.Separator} />
          <div className={classes.OrWord}>OR</div>
          <div className={classes.Separator} />
        </div>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
          {({ isSubmitting }: FormikProps<any>) => (
            <Form noValidate autoComplete="off">
              <InputWithLabel label="Email" name="email" />
              <InputWithLabel label="Password" name="password" type="password" />
              <Button type="submit" className={classes.LogInButton} disabled={isSubmitting}>
                Log in
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LogIn;