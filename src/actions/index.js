import * as types from '../actions/actionTypes';

export const fetchTodoListAction = () => ({
  type: types.FETCH_TODO_LIST,
});

export const addTodoAction = newTodo => ({
  type: types.ADD_TODO_REQUEST,
  newTodo: `1#${newTodo}`,
});

export const toggleTodoAction = (itemId, isCompleted, todoText) => ({
  type: types.TOGGLE_TODO_REQUEST,
  itemId: itemId,
  toggledTodo: isCompleted === '1' ? `0#${todoText}` : `1#${todoText}`,
});

export const updateTodoAction = (itemId, isCompleted, todoText) => ({
  type: types.UPDATE_TODO_REQUEST,
  itemId: itemId,
  updatedTodo: isCompleted === '1' ? `1#${todoText}` : `0#${todoText}`,
});

export const deleteTodoAction = itemId => ({
  type: types.DELETE_TODO_REQUEST,
  itemId,
});

export const goToDetailAction = itemId => ({
  type: types.GOTO_TODO_DETAIL,
  itemId,
});

export const setFilterStatusAction = filterStatus => ({
  type: types.SET_FILTER_STATUS,
  filterStatus,
});
