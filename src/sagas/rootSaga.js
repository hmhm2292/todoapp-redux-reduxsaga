import {all, fork} from 'redux-saga/effects';

import {
  watchFetchTodo,
  watchAddTodo,
  watchDeleteTodo,
  watchToggleTodo,
  watchUpdateTodo,
} from './todosSaga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchTodo),
    fork(watchAddTodo),
    fork(watchDeleteTodo),
    fork(watchToggleTodo),
    fork(watchUpdateTodo),
  ]);
}
