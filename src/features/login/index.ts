import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../store/rootReducer';
import { emailAndPasswordLoginAsync } from '../../store/userSlice';

import { IUserCredentials } from '../../models/user.model';

import LogIn from './LogIn';

interface DispatchProps {
  emailAndPasswordLoginAsync: (userCredentials: IUserCredentials, afterLogin?: () => void) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  emailAndPasswordLoginAsync: (userCredentials: IUserCredentials, afterLogin?: () => void) => {
    const dispatchFunction = dispatch(emailAndPasswordLoginAsync(userCredentials, afterLogin));

    return dispatchFunction;
  },
});

export type Props = DispatchProps;

export default connect<{}, DispatchProps, {}, RootState>(null, mapDispatchToProps)(LogIn);
