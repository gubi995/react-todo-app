import { connect } from 'react-redux';

import { RootState } from '../../store/rootReducer';

import { selectIsLoading } from '../../store/uiSlice';

import LoadingProgressBar from './LoadingProgressBar';

interface StateProps {
  loading: boolean;
}

const mapStateToProps = ({ uiState }: RootState): StateProps => {
  const loading = selectIsLoading(uiState);

  return { loading };
};

export type Props = StateProps;

export default connect<StateProps, {}, {}, RootState>(mapStateToProps)(LoadingProgressBar);
