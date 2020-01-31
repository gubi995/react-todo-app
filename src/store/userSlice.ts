import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from './store';

import { authService } from '../services';

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

export const createUserWithEmailAndPasswordAsync = (userCredentials: IUserCredentials): AppThunk => async (
  dispatch
) => {
  try {
    const createdUser = await authService.createUserWithEmailAndPassword(userCredentials);

    dispatch(login(createdUser));
  } catch (error) {
    console.log(error);
  }
};

export const emailAndPasswordLoginAsync = (userCredentials: IUserCredentials): AppThunk => async (dispatch) => {
  try {
    const userData = await authService.emailAndPasswordLogin(userCredentials);

    dispatch(login(userData));
  } catch (error) {
    console.log(error);
  }
};

export const facebookLoginAsync = (): AppThunk => async (dispatch) => {
  try {
    const userData = await authService.facebookLogin();

    dispatch(login(userData));
  } catch (error) {
    console.log(error);
  }
};

export const googleLoginAsync = (): AppThunk => async (dispatch) => {
  try {
    const userData = await authService.googleLogin();

    dispatch(login(userData));
  } catch (error) {
    console.log(error);
  }
};

export const logoutAsync = (): AppThunk => async (dispatch) => {
  try {
    await authService.logout();

    dispatch(logout());
  } catch (error) {
    console.log(error);
  }
};

export const selectIsUserLoggedIn = (state: UserState) => !!state.user;

export default user.reducer;
