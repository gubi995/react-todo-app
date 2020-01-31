import { RouteProps } from 'react-router';
import { connect } from 'react-redux';

import { RootState } from '../../../store/rootReducer';
import { selectIsUserLoggedIn } from '../../../store/userSlice';

import PrivateRoute from './PrivateRoute';

interface StateProps {
  isUserLoggedIn: boolean;
}

interface OwnProps extends RouteProps {
  children: React.ReactNode;
}

const mapStateToProps = (state: RootState): StateProps => {
  const isUserLoggedIn = selectIsUserLoggedIn(state.userState);

  return { isUserLoggedIn };
};

export type Props = StateProps & OwnProps;

export default connect<StateProps, {}, OwnProps, RootState>(mapStateToProps)(PrivateRoute);
