import React from 'react';

import { Formik, Form } from 'formik';

import { FacebookButton, GoogleButton, InputWithLabel, Button } from '../../components';
import initialValues from './initial-values';
import validationSchema from './validation-schema';

import classes from './LogIn.module.scss';

function LogIn() {
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

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(e) => {
            console.log(e);
          }}
        >
          <Form noValidate autoComplete="off">
            <InputWithLabel label="Email" name="email" />
            <InputWithLabel label="Password" name="password" type="password" />
            <Button className={classes.LogInButton} type="submit">
              Log in
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default LogIn;
