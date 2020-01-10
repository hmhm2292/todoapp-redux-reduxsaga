import * as types from '../actions/actionTypes';
import {put, takeLatest, all, fork} from 'redux-saga/effects';

import {Api} from './Api';

const API = 'http://34.66.158.83:8000/todo';

function* fetchTodo() {
  try {
    const fetchedTodoList = yield Api.fetchTodoList();
    yield put({
      type: types.FETCH_TODO_SUCCESS,
      fetchedTodoList: fetchedTodoList,
    });
  } catch (error) {
    yield put({type: types.FETCH_TODO_FAILED, error: error});
  }
}

export function* watchFetchTodo() {
  yield takeLatest(types.FETCH_TODO_LIST, fetchTodo);
}

// function* addTodo() {
//   const response = yield fetch(API, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const todoList = yield response.status === 200? console.log(response)
// }

// function* updateTodo() {
//   const response = yield fetch(API, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       'content' : "",
//     })
//   });
//   const updatedTodoList = yield response.status === 200? console.log(response)
// }

// function* deleteTodo() {
//   const response = yield fetch(API, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     })
//     const todoList = yield response.status === 200? console.log(response)
// }

// function* deleteTodo() {
//   const response = yield fetch(API, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     })
//     const todoList = yield response.status === 200? console.log(response)
// }
