import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../store/rootReducer';
import { selectTodo, saveTodoAsync, deleteTodoAsync } from '../../store/todoSlice';
import { selectUser } from '../../store/userSlice';

import { ITodo } from '../../models/todo.model';
import { IUser } from '../../models/user.model';

import initialValues from './initial-values';

import TodoForm from './TodoForm';

interface StateProps {
  todo: ITodo;
}

interface DispatchProps {
  saveTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
}

interface OwnProps {
  id: string;
}

const mapStateToProps = ({ todosState, userState }: RootState, { id }: OwnProps): StateProps => {
  const todo = selectTodo(todosState, id);
  const { name, email } = selectUser(userState) as IUser;

  const initialTodo: ITodo = { ...initialValues, assignee: { name, email } };

  return { todo: todo || initialTodo };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  saveTodo: (todo: ITodo) => dispatch(saveTodoAsync(todo)),
  deleteTodo: (id: string) => dispatch(deleteTodoAsync(id)),
});

export type Props = StateProps & DispatchProps & OwnProps;

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(TodoForm);
