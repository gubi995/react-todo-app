import * as Yup from 'yup';

const validationSchema = Yup.object({ email: Yup.string().email('Invalid email') });

export default validationSchema;
