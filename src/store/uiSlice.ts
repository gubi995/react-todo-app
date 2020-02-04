import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from './store';

interface UiState {
  notification: { message: string; show: boolean };
  loading: boolean;
}

const uiInitialState: UiState = {
  notification: { message: '', show: false },
  loading: false,
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
      state.loading = true;
    },
    hideLoading(state) {
      state.loading = false;
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

export const selectLoading = (state: UiState) => state.loading;

export default ui.reducer;
