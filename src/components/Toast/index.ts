import { connect } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import { selectNotification } from '../../store/uiSlice';

import Toast from './Toast';

interface StateProps {
  message: string;
  show: boolean;
}

const mapStateToProps = (state: RootState): StateProps => {
  const notification = selectNotification(state.uiState);

  return { ...notification };
};

export type Props = StateProps;

export default connect<StateProps, {}, {}, RootState>(mapStateToProps)(Toast);
