import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../store/rootReducer';
import { emailAndPasswordLoginAsync } from '../../store/userSlice';

import { IUserCredentials } from '../../models/user.model';

import LogIn from './LogIn';

interface DispatchProps {
  emailAndPasswordLoginAsync: (userCredentials: IUserCredentials) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  emailAndPasswordLoginAsync: (uc: IUserCredentials) => dispatch(emailAndPasswordLoginAsync(uc)),
});

export type Props = DispatchProps;

export default connect<{}, DispatchProps, {}, RootState>(null, mapDispatchToProps)(LogIn);
