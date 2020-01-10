import * as types from '../actions/actionTypes';

export const fetchTodoListAction = () =>
  // console.log('fetchTODOACTION'),
  ({
    type: types.FETCH_TODO_LIST,
  });

export const fetchTodoListSuccessAction = fetchedTodoList => ({
  type: types.FETCH_TODO_SUCCESS,
  fetchedTodoList,
});

export const fetchTodoListFailedAction = error => ({
  type: types.FETCH_TODO_FAILED,
  error,
});

export const addTodoAction = newTodo => ({
  type: types.ADD_TODO_REQUEST,
  newTodo: `1#${newTodo}`,
});

export const addTodoSuccessAction = updatedTodoList => ({
  type: types.ADD_TODO_SUCCESS,
  updatedTodoList,
});

export const addTodoFailedAction = error => ({
  type: types.ADD_TODO_FAILED,
  error,
});

export const toggleTodoAction = (itemId, isCompleted, todoText) => ({
  type: types.TOGGLE_TODO_REQUEST,
  itemId: itemId,
  updatedTodo: isCompleted === '1' ? `0#${todoText}` : `1#${todoText}`,
});

export const deleteTodoAction = itemId => ({
  type: types.DELETE_TODO_REQUEST,
  itemId,
});
