import { combineReducers } from '@reduxjs/toolkit';

import todosReducer from './todoSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({ todosState: todosReducer, userState: userReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
