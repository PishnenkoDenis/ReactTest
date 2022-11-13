import { all } from 'redux-saga/effects';
import loginWatcher from './authSaga';
import checkUserWatcher from './checkUserSaga';
import detailsWatcher from './detailsSaga';
import listWatcher from './listingSaga';
import logoutWatcher from './logoutSaga';

function* rootSaga() {
  yield all([loginWatcher(),
    checkUserWatcher(),
    logoutWatcher(),
    listWatcher(),
    detailsWatcher(),
  ]);
}

export default rootSaga;
