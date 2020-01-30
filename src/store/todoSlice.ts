import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from './store';

import { todoService } from '../services';

import { ITodo } from '../models/todo.model';

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
      state.todos.push(...payload);

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
});

export const { initTodos, addTodo, updateTodo, deleteTodo } = todos.actions;

export const initTodosAsync = (): AppThunk => async (dispatch) => {
  try {
    const fetchedTodos = await todoService.findAll();

    dispatch(initTodos(fetchedTodos));
  } catch (error) {
    console.log(error);
  }
};

export const saveTodoAsync = (todo: ITodo): AppThunk => async (dispatch) => {
  try {
    const newTodo = !!todo.id;
    const todoToStore = await todoService.save(todo);

    if (newTodo) {
      dispatch(updateTodo(todoToStore));
    } else {
      dispatch(addTodo(todoToStore));
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoAsync = (id: string): AppThunk => async (dispatch) => {
  try {
    await todoService.delete(id);

    dispatch(deleteTodo(id));
  } catch (error) {
    console.log(error);
  }
};

export const selectTodo = (state: TodoState, id: string) => state.todos.find((todo) => todo.id === id);

export default todos.reducer;
