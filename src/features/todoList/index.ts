import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../store/rootReducer';
import { initTodosAsync } from '../../store/todoSlice';

import TodoList from './TodoList';

const mapStateToProps = (state: RootState) => {
  const { todos } = state;

  return { ...todos };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  initTodosAsync: () => dispatch(initTodosAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
