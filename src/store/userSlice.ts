import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from './store';

import { authService } from '../services';

import { runCallbackIfExists, asyncOperationWithErrorHandling } from '../utils';

import { IUser, IUserCredentials } from '../models/user.model';

interface UserState {
  user: IUser | null;
}

const userInitialState: UserState = {
  user: null,
};

const user = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    login(state, { payload }: PayloadAction<IUser>) {
      state.user = payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = user.actions;

export const createUserWithEmailAndPasswordAsync = (
  userCredentials: IUserCredentials,
  afterSignUp?: () => void
): AppThunk => async (dispatch) => {
  await asyncOperationWithErrorHandling(dispatch, async () => {
    const createdUser = await authService.createUserWithEmailAndPassword(userCredentials);

    dispatch(login(createdUser));

    runCallbackIfExists(afterSignUp);
  });
};

export const emailAndPasswordLoginAsync = (
  userCredentials: IUserCredentials,
  afterLogin?: () => void
): AppThunk => async (dispatch) => {
  await asyncOperationWithErrorHandling(dispatch, async () => {
    const userData = await authService.emailAndPasswordLogin(userCredentials);

    dispatch(login(userData));

    runCallbackIfExists(afterLogin);
  });
};

export const facebookLoginAsync = (afterLogin?: () => void): AppThunk => async (dispatch) => {
  await asyncOperationWithErrorHandling(dispatch, async () => {
    const userData = await authService.facebookLogin();

    dispatch(login(userData));

    runCallbackIfExists(afterLogin);
  });
};

export const googleLoginAsync = (afterLogin?: () => void): AppThunk => async (dispatch) => {
  await asyncOperationWithErrorHandling(dispatch, async () => {
    const userData = await authService.googleLogin();

    dispatch(login(userData));

    runCallbackIfExists(afterLogin);
  });
};

export const logoutAsync = (afterLogout?: () => void): AppThunk => async (dispatch) => {
  await asyncOperationWithErrorHandling(dispatch, async () => {
    await authService.logout();

    dispatch(logout());

    runCallbackIfExists(afterLogout);
  });
};

export const selectIsUserLoggedIn = (state: UserState) => !!state.user;

export default user.reducer;
