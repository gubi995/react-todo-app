import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from './store';
import { showThenHideNotification } from './uiSlice';

import { AuthService, socialProviderService } from '../services';

import { runCallbackIfExists } from '../utils';

import { IUser, IUserCredentials } from '../models/user.model';

interface UserState {
  user: IUser | null;
  accessToken: string | null;
}

const userInitialState: UserState = {
  user: null,
  accessToken: null,
};

const user = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    login(state, { payload }: PayloadAction<{ user: IUser; accessToken: string }>) {
      state.user = payload.user;
      state.accessToken = payload.accessToken;
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { login, logout } = user.actions;

export const silentTokenRefresh = (tokenExpiryInSec: number, loginUserIfAlreadyAuthenticated: any): AppThunk => (
  dispatch
) => {
  const tokenExpiryInMs = tokenExpiryInSec * 1000;

  setTimeout(() => {
    dispatch(loginUserIfAlreadyAuthenticated());
  }, tokenExpiryInMs);
};

export const loginUserIfAlreadyAuthenticated = (afterSignUp?: () => void): AppThunk => async (dispatch) => {
  try {
    const loggedInUser = await AuthService.getLoggedInUser();

    if (!loggedInUser) {
      return;
    }

    const { email, accessToken, tokenExpiryInSec } = loggedInUser;

    dispatch(login({ user: { name: '', email }, accessToken }));
    dispatch(silentTokenRefresh(tokenExpiryInSec, loginUserIfAlreadyAuthenticated));

    runCallbackIfExists(afterSignUp);
  } catch (error) {
    const errorMessage = error.response.data.error;

    if (errorMessage === 'Invalid refresh token') {
      return;
    }

    dispatch(showThenHideNotification(errorMessage));
  }
};

export const createUserWithEmailAndPasswordAsync = (
  userCredentials: IUserCredentials,
  afterSignUp?: () => void
): AppThunk => async (dispatch) => {
  try {
    const { email, accessToken, tokenExpiryInSec } = await AuthService.createUserWithEmailAndPassword(userCredentials);

    dispatch(login({ user: { name: '', email }, accessToken }));
    dispatch(silentTokenRefresh(tokenExpiryInSec, loginUserIfAlreadyAuthenticated));

    runCallbackIfExists(afterSignUp);
  } catch (error) {
    dispatch(showThenHideNotification(error.response.data.error));
  }
};

export const emailAndPasswordLoginAsync = (
  userCredentials: IUserCredentials,
  afterLogin?: () => void
): AppThunk => async (dispatch) => {
  try {
    const { email, accessToken, tokenExpiryInSec } = await AuthService.emailAndPasswordLogin(userCredentials);

    dispatch(login({ user: { name: '', email }, accessToken }));
    dispatch(silentTokenRefresh(tokenExpiryInSec, loginUserIfAlreadyAuthenticated));

    runCallbackIfExists(afterLogin);
  } catch (error) {
    dispatch(showThenHideNotification(error.response.data.error));
  }
};

export const facebookLoginAsync = (afterLogin?: () => void): AppThunk => async (dispatch) => {
  try {
    // const userData = await socialProviderService.facebookLogin();

    // dispatch(login(userData));

    runCallbackIfExists(afterLogin);
  } catch (error) {
    dispatch(showThenHideNotification(error.response.data.error));
  }
};

export const googleLoginAsync = (afterLogin?: () => void): AppThunk => async (dispatch) => {
  try {
    // const userData = await socialProviderService.googleLogin();

    // dispatch(login(userData));

    runCallbackIfExists(afterLogin);
  } catch (error) {
    dispatch(showThenHideNotification(error.response.data.error));
  }
};

export const logoutAsync = (afterLogout?: () => void): AppThunk => async (dispatch) => {
  try {
    await socialProviderService.logout();
    localStorage.removeItem('refresh-token');

    dispatch(logout());

    runCallbackIfExists(afterLogout);
  } catch (error) {
    dispatch(showThenHideNotification(error.response.data.error));
  }
};

export const selectIsUserLoggedIn = (state: UserState) => !!state.user && !!state.accessToken;

export default user.reducer;
