import { ITodoService } from './todo-service.interface';
import { ITodo } from '../models/todo.model';

const sleep = (ms: number) => {
  const scheduler = new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, ms);
  });

  return scheduler;
};

class TodoMockService implements ITodoService {
  todos: ITodo[] = [];

  async findAll(): Promise<ITodo[]> {
    await sleep(2000);

    return this.todos;
  }

  async find(id: string): Promise<ITodo | undefined> {
    await sleep(2000);

    return this.todos.find((todo) => todo.id === id);
  }

  async save(todo: ITodo): Promise<void> {
    await sleep(2000);

    this.todos.push(todo);
  }

  async delete(id: string): Promise<void> {
    await sleep(2000);

    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

const todoService = new TodoMockService();

export default todoService;
