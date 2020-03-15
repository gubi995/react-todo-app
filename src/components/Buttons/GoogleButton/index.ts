import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../../store/rootReducer';
import { socialLoginAsync } from '../../../store/userSlice';
import { ISocialSignUpData } from '../../../models/user.model';

import GoogleButton from './GoogleButton';

interface DispatchProps {
  socialLoginAsync: (userData: ISocialSignUpData, afterLogin?: () => void) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  socialLoginAsync: (userData: ISocialSignUpData, afterLogin?: () => void) =>
    dispatch(socialLoginAsync(userData, afterLogin)),
});

export type Props = DispatchProps;

export default connect<{}, DispatchProps, {}, RootState>(null, mapDispatchToProps)(GoogleButton);
