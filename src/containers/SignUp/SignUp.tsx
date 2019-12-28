import React from 'react';

import { Formik, Form } from 'formik';

import { InputWithLabel, Button } from '../../components';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

import classes from './SignUp.module.scss';

function SignUp() {
  return (
    <div className={classes.SignUp}>
      <h2 className={classes.Heading}>Sign up</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <Form>
          <InputWithLabel label="Email" name="email" />
          <InputWithLabel label="Password" name="password" type="password" />
          <InputWithLabel label="Confirm password" name="confirmPassword" type="password" />
          <Button className={classes.SignUpButton}>Sign up</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUp;
