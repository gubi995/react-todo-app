import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../../store/rootReducer';
import { facebookLoginAsync } from '../../../store/userSlice';

import FacebookButton from './FacebookButton';

interface DispatchProps {
  facebookLoginAsync: (afterLogin?: () => void) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  facebookLoginAsync: (afterLogin?: () => void) => dispatch(facebookLoginAsync(afterLogin)),
});

export type Props = DispatchProps;

export default connect<{}, DispatchProps, {}, RootState>(null, mapDispatchToProps)(FacebookButton);
