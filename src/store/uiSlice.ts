import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

import { AppThunk } from './store';

interface UiState {
  notification: { message: string; show: boolean };
  inProgressRequests: number;
}

const uiInitialState: UiState = {
  notification: { message: '', show: false },
  inProgressRequests: 0,
};

const ui = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    showNotification(state, { payload }: PayloadAction<string>) {
      state.notification.message = payload;
      state.notification.show = true;
    },
    hideNotification(state) {
      state.notification.show = false;
    },
    showLoading(state) {
      state.inProgressRequests += 1;
    },
    hideLoading(state) {
      state.inProgressRequests -= 1;
    },
  },
});

export const { showNotification, hideNotification, showLoading, hideLoading } = ui.actions;

export const showThenHideNotification = (message: string): AppThunk => (dispatch) => {
  dispatch(showNotification(message));

  setTimeout(() => {
    dispatch(hideNotification());
  }, 4000);
};

export const selectNotification = (state: UiState) => state.notification;

export const selectInProgressRequests = (state: UiState) => state.inProgressRequests;

export const selectIsLoading = createSelector(selectInProgressRequests, (InProgressRequests) => InProgressRequests > 0);

export default ui.reducer;
