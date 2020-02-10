import { batch } from 'react-redux';

import { ThunkDispatch } from 'redux-thunk';

import { showLoading, hideLoading, showThenHideNotification } from './store/uiSlice';

export const asyncOperationWithErrorHandling = async (
  dispatch: ThunkDispatch<{}, {}, any>,
  callback: () => Promise<void>
) => {
  try {
    dispatch(showLoading());

    await callback();

    dispatch(hideLoading());
  } catch (error) {
    batch(() => {
      dispatch(hideLoading());
      dispatch(showThenHideNotification(error.message));
    });
  }
};

export const runCallbackIfExists = (callback?: () => void) => {
  if (callback) {
    callback();
  }
};
