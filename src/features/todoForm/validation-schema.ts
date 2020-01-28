import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string()
    .min(5, 'Title should at least five character')
    .required('Task name is required'),
  deadline: Yup.string().required('Deadline is required'),
  assignee: Yup.object({
    name: Yup.string().required('Assignee name is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
  }),
  subTasks: Yup.array(
    Yup.object({
      title: Yup.string()
        .min(5, 'Title should at least five character')
        .required('Sub-task name is required'),
    })
  ),
});

export default validationSchema;
