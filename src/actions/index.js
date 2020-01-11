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
  toggledTodo: isCompleted === '1' ? `0#${todoText}` : `1#${todoText}`,
});

export const toggleTodoSuccessAction = toggledTodo => (
  console.log('toggled', toggledTodo),
  {
    type: types.TOGGLE_TODO_SUCCESS,
    toggledTodo,
  }
);

export const updateTodoAction = (itemId, isCompleted, todoText) => (
  console.log('updateTodoAction', itemId, isCompleted, todoText),
  {
    type: types.UPDATE_TODO_REQUEST,
    itemId: itemId,
    updatedTodo: isCompleted === '1' ? `1#${todoText}` : `0#${todoText}`,
  }
);

export const deleteTodoAction = itemId => ({
  type: types.DELETE_TODO_REQUEST,
  itemId,
});

export const goToDetailAction = itemId => (
  console.log('detailId', itemId),
  {
    type: types.GOTO_TODO_DETAIL,
    itemId,
  }
);

export const goToEditDetail = () => ({});
