import {
  FETCH_TODO_LIST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILED,
  ADD_TODO,
  TOGGLE_TODO,
} from './actionTypes';

export const fetchTodoListAction = () => ({
  type: FETCH_TODO_LIST,
});

export const fetchTodoListSuccessAction = fetchedTodoList => ({
  type: FETCH_TODO_SUCCESS,
  fetchedTodoList,
});

export const fetchTodoListFailedAction = error => ({
  type: FETCH_TODO_FAILED,
});

export const toggleTodoAction = (itemId, isCompleted, todoText) => ({
  type: TOGGLE_TODO,
  itemId: itemId,
  isCompleted: isCompleted,
  todoText: todoText,
});

export const addTodoAction = newTodo => ({
  type: ADD_TODO,
  newTodo: `1#${newTodo}`,
});

// export const deleteTodoAction = id => ({
//   type: 'DELETE_TODO',
//   id,
// });

// export const updateTodoAction = (id, updatedTodo) => ({
//   type: 'UPDATE_TODO',
//   id: id,
//   fields: updatedTodo,
// });
