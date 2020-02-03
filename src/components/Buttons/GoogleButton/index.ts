import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../../store/rootReducer';
import { googleLoginAsync } from '../../../store/userSlice';

import GoogleButton from './GoogleButton';

interface DispatchProps {
  googleLoginAsync: (afterLogin?: () => void) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  googleLoginAsync: (afterLogin?: () => void) => dispatch(googleLoginAsync(afterLogin)),
});

export type Props = DispatchProps;

export default connect<{}, DispatchProps, {}, RootState>(null, mapDispatchToProps)(GoogleButton);
