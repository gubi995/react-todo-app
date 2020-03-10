import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from './store';
import { logout } from './userSlice';

import { TodoService } from '../services';

import { ITodo } from '../models/todo.model';
import { showThenHideNotification } from './uiSlice';

interface TodoState {
  todos: ITodo[];
  loaded: boolean;
}

const todoInitialState: TodoState = {
  todos: [],
  loaded: false,
};

const todos = createSlice({
  name: 'todos',
  initialState: todoInitialState,
  reducers: {
    initTodos(state, { payload }: PayloadAction<ITodo[]>) {
      state.todos = payload;

      state.loaded = true;
    },
    addTodo(state, { payload }: PayloadAction<ITodo>) {
      state.todos.push(payload);
    },
    updateTodo(state, { payload }: PayloadAction<ITodo>) {
      const todoIndex = state.todos.findIndex((todo) => todo.id === payload.id);

      state.todos[todoIndex] = payload;
    },
    deleteTodo(state, { payload }: PayloadAction<string>) {
      const todoIndex = state.todos.findIndex((todo) => todo.id === payload);

      state.todos.splice(todoIndex, 1);
    },
  },
  extraReducers: {
    [logout.type]: (state) => {
      state.todos = [];
      state.loaded = false;
    },
  },
});

export const { initTodos, addTodo, updateTodo, deleteTodo } = todos.actions;

export const initTodosAsync = (): AppThunk => async (dispatch) => {
  try {
    const fetchedTodos = await TodoService.findAll();

    dispatch(initTodos(fetchedTodos));
  } catch (error) {
    dispatch(showThenHideNotification(error.message));
  }
};

export const saveTodoAsync = (todo: ITodo): AppThunk => async (dispatch) => {
  try {
    const newTodo = !!todo.id;
    const savedTodo = await TodoService.save(todo);

    if (newTodo) {
      dispatch(updateTodo(savedTodo));
    } else {
      dispatch(addTodo(savedTodo));
    }
  } catch (error) {
    dispatch(showThenHideNotification(error.message));
  }
};

export const deleteTodoAsync = (id: string): AppThunk => async (dispatch) => {
  try {
    await TodoService.delete(id);

    dispatch(deleteTodo(id));
  } catch (error) {
    dispatch(showThenHideNotification(error.message));
  }
};

export const selectTodo = (state: TodoState, id: string) => state.todos.find((todo) => todo.id === id);

export default todos.reducer;
