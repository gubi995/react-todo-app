import * as Yup from 'yup';

function confirmPasswordValidator(this: Yup.TestContext, value?: any) {
  const { password } = this.parent;

  return value === password;
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email'),
  password: Yup.string()
    .min(7, 'Title should at least seven character')
    .required('Password is required'),
  confirmPassword: Yup.mixed().test('confirm-password', 'Passwords are not equal', confirmPasswordValidator),
});

export default validationSchema;
