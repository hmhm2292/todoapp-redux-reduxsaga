import {call, all, fork, spawn} from 'redux-saga/effects';

import {
  watchFetchTodo,
  watchAddTodo,
  watchDeleteTodo,
  watchToggleTodo,
} from './todosSaga';

export default function* rootSaga() {
  console.log('rootSaga');

  // yield call(watchFetchTodo);
  yield all([
    fork(watchFetchTodo),
    fork(watchAddTodo),
    fork(watchDeleteTodo),
    fork(watchToggleTodo),
  ]);
}
