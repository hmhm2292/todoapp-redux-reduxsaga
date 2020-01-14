import * as types from '../actions/actionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';

import {Api} from './Api';

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

function* addTodo(action) {
  try {
    const addedTodo = yield Api.addTodo(action);
    yield put({
      type: types.ADD_TODO_SUCCESS,
      addedTodo: addedTodo,
    });
  } catch (error) {
    yield put({type: types.ADD_TODO_FAILED, error: error});
  }
}

function* deleteTodo(action) {
  try {
    const deletedTodo = yield Api.deleteTodo(action);
    if (deletedTodo === true) {
      yield put({type: types.DELETE_TODO_SUCCESS, itemId: action.itemId});
      // yield call(fetchTodo);
    }
  } catch (error) {
    yield put({type: types.DELETE_TODO_FAILED, error: error});
  }
}

function* toggleTodo(action) {
  try {
    const toggledTodo = yield Api.toggleTodo(action);
    yield put({type: types.TOGGLE_TODO_SUCCESS, toggledTodo: toggledTodo});
    // yield call(fetchTodo) used to fetch the whole todoList
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
  yield takeLatest(types.FETCH_TODO_LIST, fetchTodo);
}

export function* watchAddTodo() {
  yield takeLatest(types.ADD_TODO_REQUEST, addTodo);
}

export function* watchDeleteTodo() {
  yield takeLatest(types.DELETE_TODO_REQUEST, deleteTodo);
}

export function* watchToggleTodo() {
  yield takeLatest(types.TOGGLE_TODO_REQUEST, toggleTodo);
}

export function* watchUpdateTodo() {
  yield takeLatest(types.UPDATE_TODO_REQUEST, updateTodo);
}
