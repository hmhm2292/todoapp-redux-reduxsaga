import * as types from '../actions/actionTypes';
import {put, takeLatest, call, fork} from 'redux-saga/effects';

import {Api} from './Api';

const API = 'http://34.66.158.83:8000/todo';

function* fetchTodo() {
  // console.log('fetchTodo');
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

function* addTodo(action) {
  try {
    // console.log('pass');
    const sendTodo = yield Api.addTodo(action);
    if (sendTodo === true) {
      yield call(fetchTodo);
    }
  } catch (error) {
    yield put({type: types.ADD_TODO_FAILED, error: error});
  }
}

function* deleteTodo(action) {
  try {
    const deletedTodo = yield Api.deleteTodo(action);
    if (deletedTodo === true) {
      yield call(fetchTodo);
    }
  } catch (error) {
    yield put({type: types.DELETE_TODO_FAILED, error: error});
  }
}

function* toggleTodo(action) {
  try {
    const toggledTodo = yield Api.toggleTodo(action);
    console.log('toggled', toggledTodo);
    yield put({type: types.TOGGLE_TODO_SUCCESS, toggledTodo: toggledTodo});
    // yield call(fetchTodo);
  } catch (error) {
    yield put({type: types.TOGGLE_TODO_FAILED, error: error});
  }
}

function* updateTodo(action) {
  try {
    const updatedTodo = yield Api.updateTodo(action);
    yield put({type: types.UPDATE_TODO_SUCCESS, updatedTodo: updatedTodo});
  } catch (error) {
    yield put({type: types.UPDATE_TODO_FAILED, error: error});
  }
}

export function* watchFetchTodo() {
  console.log('watchFetchTodo');
  yield takeLatest(types.FETCH_TODO_LIST, fetchTodo);
}

export function* watchAddTodo() {
  console.log('watchADDTODO');
  yield takeLatest(types.ADD_TODO_REQUEST, addTodo);
}

export function* watchDeleteTodo() {
  console.log('WatchDelete');
  yield takeLatest(types.DELETE_TODO_REQUEST, deleteTodo);
}

export function* watchToggleTodo() {
  console.log('watchToggle');
  yield takeLatest(types.TOGGLE_TODO_REQUEST, toggleTodo);
}

export function* watchUpdateTodo() {
  console.log('watchUpdate');
  yield takeLatest(types.UPDATE_TODO_REQUEST, updateTodo);
}
