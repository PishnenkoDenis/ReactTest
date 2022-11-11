import { all } from 'redux-saga/effects';
import loginWatcher from './authSaga';
import checkUserWatcher from './checkUserSaga';
import listWatcher from './listingSaga';
import logoutWatcher from './logoutSaga';

function* rootSaga() {
  yield all([loginWatcher(),
    checkUserWatcher(),
    logoutWatcher(),
    listWatcher(),
  ]);
}

export default rootSaga;
