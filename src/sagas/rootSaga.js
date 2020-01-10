import {call, all} from 'redux-saga/effects';

import {watchFetchTodo} from './todosSaga';

export default function* rootSaga() {
  yield all([watchFetchTodo()]);
}
