import React, { useEffect } from 'react';

import { useHistory } from 'react-router';

import { Formik, Form, FormikHelpers, FormikProps } from 'formik';

import { FacebookButton, GoogleButton, InputWithLabel, Button } from '../../components';
import { ITraditionalLoginData } from '../../models/user.model';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

import { Props } from '.';

import classes from './LogIn.module.scss';

function LogIn({ emailAndPasswordLoginAsync, loginUserIfAlreadyAuthenticated }: Props) {
  const history = useHistory();

  useEffect(() => {
    loginUserIfAlreadyAuthenticated(() => {
      history.push('/todos');
    });
  }, [loginUserIfAlreadyAuthenticated, history]);

  const submitHandler = async (
    userCredentials: ITraditionalLoginData,
    { setSubmitting, resetForm }: FormikHelpers<ITraditionalLoginData>
  ) => {
    emailAndPasswordLoginAsync(userCredentials, () => {
      setSubmitting(false);
      resetForm();
      history.push('/todos');
    });
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
            <Form noValidate>
              <InputWithLabel label="Email" name="email" autoComplete="current-password" />
              <InputWithLabel label="Password" name="password" type="password" autoComplete="current-password" />
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
