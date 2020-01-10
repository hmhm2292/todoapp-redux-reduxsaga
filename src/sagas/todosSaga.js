import * as types from '../actions/actionTypes';
import {put, takeLatest, call, fork} from 'redux-saga/effects';

import {Api} from './Api';

const API = 'http://34.66.158.83:8000/todo';

function* fetchTodo() {
  console.log('fetchTodo');
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

function* postTodo(action) {
  try {
    console.log('pass');
    const sendTodo = yield Api.addTodo(action);
    console.log(sendTodo);
    if (sendTodo === true) {
      yield call(fetchTodo);
    }
  } catch (error) {
    yield put({type: types.ADD_TODO_FAILED, error: error});
  }
}

function* eraseTodo(action) {
  try {
    const deletedTodo = yield Api.deleteTodo(action);
    if (deletedTodo === true) {
      yield call(fetchTodo);
    }
  } catch (error) {
    yield put({type: types.DELETE_TODO_FAILED, error: error});
  }
}

function* changeTodo(action) {
  try {
    const updatedTodo = yield Api.updateTodo(action);
    if (updatedTodo === true) {
      yield call(fetchTodo);
    }
  } catch (error) {
    yield put({type: types.TOGGLE_TODO_FAILED, error: error});
  }
}

export function* watchFetchTodo() {
  console.log('watchFetchTodo');
  yield takeLatest(types.FETCH_TODO_LIST, fetchTodo);
}

export function* watchAddTodo() {
  console.log('watchADDTODO');
  yield takeLatest(types.ADD_TODO_REQUEST, postTodo);
}

export function* watchDeleteTodo() {
  console.log('WatchDelete');
  yield takeLatest(types.DELETE_TODO_REQUEST, eraseTodo);
}

export function* watchToggleTodo() {
  console.log('watchToggle');
  yield takeLatest(types.TOGGLE_TODO_REQUEST, changeTodo);
}

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
