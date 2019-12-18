import Priority from './priority.enum';

export interface ITodo {
  id: string;
  title: string;
  priority: Priority;
  deadline: string;
  completed: boolean;
  assignee: IAssignee;
  subTasks: ISubTask[];
}

export interface IAssignee {
  name: string;
  email: string;
}

export interface ISubTask {
  title: string;
  completed: boolean;
}
