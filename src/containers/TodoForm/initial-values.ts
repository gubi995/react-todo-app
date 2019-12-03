import { ITodo, Priority } from '../../models/todo.model';

const initialValues: ITodo = {
  title: '',
  priority: Priority.LOW,
  deadline: new Date().toLocaleDateString('en-CA'),
  completed: false,
  assignee: {
    name: '',
    email: '',
  },
  subTasks: [],
};

export default initialValues;
