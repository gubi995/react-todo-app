import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from './store';
import { showThenHideNotification } from './uiSlice';

import { AuthService } from '../services';

import { IUser, ITraditionalSignUpData, ITraditionalLoginData, ISocialSignUpData } from '../models/user.model';

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

const isIrrelevant = (errorMessage: string) => {
  const isTokenInvalid = errorMessage === 'Invalid refresh token';
  const isCookieValidationError = errorMessage.includes('cookie');
  const isHeaderValidationError = errorMessage.includes('header');

  return isTokenInvalid || isCookieValidationError || isHeaderValidationError;
};

export const loginUserIfAlreadyAuthenticated = (afterSignUp?: () => void): AppThunk => async (dispatch) => {
  try {
    const loggedInUser = await AuthService.getLoggedInUser();

    if (!loggedInUser) {
      return;
    }

    dispatch(login(loggedInUser));
    dispatch(silentTokenRefresh(loggedInUser.tokenExpiryInSec, loginUserIfAlreadyAuthenticated));

    afterSignUp?.();
  } catch (error) {
    const errorMessage = error.response.data.error;

    if (isIrrelevant(errorMessage)) {
      return;
    }

    dispatch(showThenHideNotification(errorMessage));
  }
};

export const createUserWithEmailAndPasswordAsync = (
  userCredentials: ITraditionalSignUpData,
  afterSignUp?: () => void
): AppThunk => async (dispatch) => {
  try {
    const newUser = await AuthService.createUserWithEmailAndPassword(userCredentials);

    dispatch(login(newUser));
    dispatch(silentTokenRefresh(newUser.tokenExpiryInSec, loginUserIfAlreadyAuthenticated));

    afterSignUp?.();
  } catch (error) {
    dispatch(showThenHideNotification(error.response.data.error));
  }
};

export const emailAndPasswordLoginAsync = (
  userCredentials: ITraditionalLoginData,
  afterLogin?: () => void
): AppThunk => async (dispatch) => {
  try {
    const loggedInUser = await AuthService.emailAndPasswordLogin(userCredentials);

    dispatch(login(loggedInUser));
    dispatch(silentTokenRefresh(loggedInUser.tokenExpiryInSec, loginUserIfAlreadyAuthenticated));

    afterLogin?.();
  } catch (error) {
    dispatch(showThenHideNotification(error.response.data.error));
  }
};

export const socialLoginAsync = (userData: ISocialSignUpData, afterLogin?: () => void): AppThunk => async (
  dispatch
) => {
  try {
    const loggedInUser = await AuthService.socialSignUp(userData);

    dispatch(login(loggedInUser));
    dispatch(silentTokenRefresh(loggedInUser.tokenExpiryInSec, loginUserIfAlreadyAuthenticated));

    afterLogin?.();
  } catch (error) {
    dispatch(showThenHideNotification(error.response.data.error));
  }
};

export const logoutAsync = (afterLogout?: () => void): AppThunk => async (dispatch) => {
  try {
    localStorage.removeItem('refresh-token');

    dispatch(logout());

    afterLogout?.();
  } catch (error) {
    dispatch(showThenHideNotification(error.response.data.error));
  }
};

export const selectIsUserLoggedIn = (state: UserState) => !!state.user && !!state.accessToken;

export const selectUser = (state: UserState) => state.user;

export default user.reducer;
