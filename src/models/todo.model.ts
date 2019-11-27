export interface ITodo {
  title: string;
  assignee: IAssignee | null;
  completed: boolean;
  priority: Priority;
  deadline: string;
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
