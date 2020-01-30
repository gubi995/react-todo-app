import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../store/rootReducer';
import { selectTodo, saveTodoAsync, deleteTodoAsync } from '../../store/todoSlice';

import { ITodo } from '../../models/todo.model';

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

const mapStateToProps = (state: RootState, { id }: OwnProps): StateProps => {
  const todo = selectTodo(state.todos, id);

  return { todo: todo || initialValues };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  saveTodo: (todo: ITodo) => dispatch(saveTodoAsync(todo)),
  deleteTodo: (id: string) => dispatch(deleteTodoAsync(id)),
});

export type Props = StateProps & DispatchProps & OwnProps;

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(TodoForm);
