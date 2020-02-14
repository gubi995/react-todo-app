import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../store/rootReducer';
import { initTodosAsync } from '../../store/todoSlice';
import { ITodo } from '../../models/todo.model';

import TodoList from './TodoList';

interface StateProps {
  todos: ITodo[];
  loaded: boolean;
}

interface DispatchProps {
  initTodosAsync: () => void;
}

const mapStateToProps = ({ todosState }: RootState): StateProps => todosState;

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  initTodosAsync: () => dispatch(initTodosAsync()),
});

export type Props = StateProps & DispatchProps;

export default connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(TodoList);
