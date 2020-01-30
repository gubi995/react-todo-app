import { db } from '../firebase/firebase';

import { ITodoService } from './todo-service.interface';
import { ITodo } from '../../models/todo.model';

class TodoFirebaseService implements ITodoService {
  todoDb: firebase.firestore.CollectionReference;

  constructor() {
    this.todoDb = db.collection('todos');
  }

  async findAll(): Promise<ITodo[]> {
    const querySnapshot = await this.todoDb.get();

    const todos = querySnapshot.docs.map((doc) => doc.data() as ITodo);

    return todos;
  }

  async find(id: string): Promise<ITodo | undefined> {
    const querySnapshot = await this.todoDb.where('id', '==', id).get();

    if (!querySnapshot.empty) {
      const [todo] = querySnapshot.docs;

      return todo.data() as ITodo;
    }

    return undefined;
  }

  async save(todo: ITodo): Promise<ITodo> {
    if (todo.id) {
      await this.todoDb.doc(todo.id).set(todo);

      return todo;
    }

    const newTodoRef = this.todoDb.doc();
    const newTodo: ITodo = { ...todo, id: newTodoRef.id };

    await newTodoRef.set(newTodo);

    return newTodo;
  }

  async delete(id: string): Promise<void> {
    return this.todoDb.doc(id).delete();
  }
}

const todoService = new TodoFirebaseService();

export default todoService;
