export interface ITodo {
  id: number;
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

export enum Priority {
  HIGH = 'High',
  NORMAL = 'Normal',
  LOW = 'Low',
}