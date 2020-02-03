import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../store/rootReducer';
import { logoutAsync, selectIsUserLoggedIn } from '../../store/userSlice';

import NavigationBar from './NavigationBar';

interface StateProps {
  isUserLoggedIn: boolean;
}

interface DispatchProps {
  logoutAsync: (afterLogout?: () => void) => void;
}

const mapStateToProps = (state: RootState): StateProps => {
  const isUserLoggedIn = selectIsUserLoggedIn(state.userState);

  return { isUserLoggedIn };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  logoutAsync: (afterLogout?: () => void) => dispatch(logoutAsync(afterLogout)),
});

export type Props = StateProps & DispatchProps;

export default connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(NavigationBar);
