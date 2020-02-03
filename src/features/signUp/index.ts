import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../store/rootReducer';
import { createUserWithEmailAndPasswordAsync } from '../../store/userSlice';

import { IUserCredentials } from '../../models/user.model';

import SignUp from './SignUp';

interface DispatchProps {
  createUserWithEmailAndPasswordAsync: (userCredentials: IUserCredentials, afterSignUp?: () => void) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  createUserWithEmailAndPasswordAsync: (userCredentials: IUserCredentials, afterSignUp?: () => void) => {
    const dispatchFunction = dispatch(createUserWithEmailAndPasswordAsync(userCredentials, afterSignUp));

    return dispatchFunction;
  },
});

export type Props = DispatchProps;

export default connect<{}, DispatchProps, {}, RootState>(null, mapDispatchToProps)(SignUp);
