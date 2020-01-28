import { ITodo } from '../../models/todo.model';
import Priority from '../../models/priority.enum';

const initialValues: ITodo = {
  id: '',
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
