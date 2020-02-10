import { connect } from 'react-redux';

import { RootState } from '../../store/rootReducer';

import LoadingIndicator from './LoadingIndicator';

interface StateProps {
  loading: boolean;
}

const mapStateToProps = (state: RootState): StateProps => {
  const { loading } = state.uiState;

  return { loading };
};

export type Props = StateProps;

export const SmartLoadingIndicator = connect<StateProps, {}, {}, RootState>(mapStateToProps)(LoadingIndicator);

export const DummyLoadingIndicator = LoadingIndicator;
