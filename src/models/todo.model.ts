export interface ITodo {
  title: string;
  priority: Priority;
  deadline: string;
  completed: boolean;
  assignee: IAssignee | null;
  subTasks: SubTask[];
}

export interface IAssignee {
  name: string;
  email: string;
}

export interface SubTask {
  title: string;
  completed: boolean;
}

export enum Priority {
  HIGH = 'High',
  NORMAL = 'Normal',
  LOW = 'Low',
}
