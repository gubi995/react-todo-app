import { connect } from 'react-redux';

import { RootState } from '../../store/rootReducer';

import LoadingIndicator from './LoadingIndicator';
import { selectIsLoading } from '../../store/uiSlice';

interface StateProps {
  loading: boolean;
}

const mapStateToProps = ({ uiState }: RootState): StateProps => {
  const loading = selectIsLoading(uiState);

  return { loading };
};

export type Props = StateProps;

export const SmartLoadingIndicator = connect<StateProps, {}, {}, RootState>(mapStateToProps)(LoadingIndicator);

export const DummyLoadingIndicator = LoadingIndicator;
