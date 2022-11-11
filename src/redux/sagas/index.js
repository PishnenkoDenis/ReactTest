import { all } from 'redux-saga/effects';
import loginWatcher from './authSaga';
import checkUserWatcher from './checkUserSaga';
import logoutWatcher from './logoutSaga';

function* rootSaga() {
  yield all([loginWatcher(),
    checkUserWatcher(),
    logoutWatcher()]);
}

export default rootSaga;
