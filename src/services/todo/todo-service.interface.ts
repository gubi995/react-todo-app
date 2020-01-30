import { ITodo } from '../../models/todo.model';

export interface ITodoService {
  findAll: () => Promise<ITodo[]>;
  find: (id: string) => Promise<ITodo | undefined>;
  save: (todo: ITodo) => Promise<ITodo>;
  delete: (id: string) => Promise<void>;
}
