import { ITodo } from '../models/todo.model';

export interface ITodoService {
  findAll: () => Promise<ITodo[]>;
  find: (id: number) => Promise<ITodo | undefined>;
  save: (todo: ITodo) => Promise<void>;
  delete: (id: number) => Promise<void>;
}
