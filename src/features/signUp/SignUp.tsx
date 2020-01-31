import React, { useContext } from 'react';

import { useHistory } from 'react-router';

import { Formik, Form, FormikHelpers, FormikProps } from 'formik';

import { InputWithLabel, Button, NotificationContext } from '../../components';
import { ISignUpData } from '../../models/user.model';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

import { Props } from '.';

import classes from './SignUp.module.scss';

function SignUp({ createUserWithEmailAndPasswordAsync }: Props) {
  const history = useHistory();
  const { setNotification } = useContext(NotificationContext);

  const submitHandler = async (signUpData: ISignUpData, { setSubmitting, resetForm }: FormikHelpers<ISignUpData>) => {
    try {
      createUserWithEmailAndPasswordAsync(signUpData);

      setSubmitting(false);
      resetForm();
      history.push('/todos');
    } catch (error) {
      setNotification({ show: true, message: error.message });
    }
  };

  return (
    <div className={classes.SignUp}>
      <h2 className={classes.Heading}>Sign up</h2>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
        {({ isSubmitting }: FormikProps<ISignUpData>) => (
          <Form>
            <InputWithLabel label="Email" name="email" />
            <InputWithLabel label="Password" name="password" type="password" />
            <InputWithLabel label="Confirm password" name="confirmPassword" type="password" />
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
