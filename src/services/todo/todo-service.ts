import httpClient from '../../shared/httpClient';

import { ITodo } from '../../models/todo.model';

class TodoService {
  static async findAll(): Promise<ITodo[]> {
    const { data: todos, error } = await httpClient.get('api/v1/todos/my');

    if (error) {
      return [];
    }

    return todos;
  }

  static async find(id: string): Promise<ITodo | undefined> {
    const { data: todo, error } = await httpClient.get(`api/v1/todos/${id}`);

    if (error) {
      return undefined;
    }

    return todo;
  }

  static async save(todo: ITodo): Promise<ITodo> {
    const { id } = todo;

    if (id) {
      const { data: updatedTodo } = await httpClient.put(`api/v1/todos/${id}`, todo);

      return updatedTodo;
    }

    const { data: newTodo } = await httpClient.post('api/v1/todos', todo);

    return newTodo;
  }

  static async delete(id: string): Promise<void> {
    return httpClient.delete(`api/v1/todos/${id}`);
  }
}

export default TodoService;
