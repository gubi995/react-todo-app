import { ITodoService } from './todo-service.interface';
import { ITodo } from '../models/todo.model';
import { db } from './firebase/firebase';

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

  async save(todo: ITodo): Promise<void> {
    if (todo.id) {
      this.todoDb.doc(todo.id).set(todo);
    } else {
      const newTodoRef = this.todoDb.doc();

      this.todoDb.add({ ...todo, id: newTodoRef.id });
    }
  }

  async delete(id: string): Promise<void> {
    this.todoDb.doc(id).delete();
  }
}

const todoService = new TodoFirebaseService();

export default todoService;
