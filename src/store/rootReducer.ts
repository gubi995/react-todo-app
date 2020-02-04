import { combineReducers } from '@reduxjs/toolkit';

import todosReducer from './todoSlice';
import userReducer from './userSlice';
import uiReducer from './uiSlice';

const rootReducer = combineReducers({ todosState: todosReducer, userState: userReducer, uiState: uiReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
