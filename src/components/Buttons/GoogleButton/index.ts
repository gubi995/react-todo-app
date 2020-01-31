import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../../store/rootReducer';
import { googleLoginAsync } from '../../../store/userSlice';

import GoogleButton from './GoogleButton';

interface DispatchProps {
  googleLoginAsync: () => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  googleLoginAsync: () => dispatch(googleLoginAsync()),
});

export type Props = DispatchProps;

export default connect<{}, DispatchProps, {}, RootState>(null, mapDispatchToProps)(GoogleButton);
