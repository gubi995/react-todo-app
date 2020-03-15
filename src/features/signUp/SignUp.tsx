import React from 'react';

import { useHistory } from 'react-router';

import { Formik, Form, FormikHelpers, FormikProps } from 'formik';

import { InputWithLabel, Button } from '../../components';
import { ITraditionalSignUpData } from '../../models/user.model';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

import { Props } from '.';

import classes from './SignUp.module.scss';

function SignUp({ createUserWithEmailAndPasswordAsync }: Props) {
  const history = useHistory();

  const submitHandler = async (
    signUpData: ITraditionalSignUpData,
    { setSubmitting, resetForm }: FormikHelpers<ITraditionalSignUpData>
  ) => {
    createUserWithEmailAndPasswordAsync(signUpData, () => {
      setSubmitting(false);
      resetForm();
      history.push('/todos');
    });
  };

  return (
    <div className={classes.SignUp}>
      <h2 className={classes.Heading}>Sign up</h2>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
        {({ isSubmitting }: FormikProps<ITraditionalSignUpData>) => (
          <Form noValidate>
            <InputWithLabel label="Email" name="email" autoComplete="new-email" />
            <InputWithLabel label="Name" name="name" autoComplete="new-name" />
            <InputWithLabel label="Password" name="password" type="password" autoComplete="new-password" />
            <InputWithLabel
              label="Confirm password"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
            />
            <Button type="submit" className={classes.SignUpButton} disabled={isSubmitting}>
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
