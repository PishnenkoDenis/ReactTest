import {
  put, takeLatest,
} from 'redux-saga/effects';

import { USER_LOGOUT } from '../../utils/constants';
import { logoutUserSuccessed } from '../actions/logoutActions';

function* logoutWorker() {
  yield put(logoutUserSuccessed());
  localStorage.removeItem('token');
}

function* logoutWatcher() {
  yield takeLatest(USER_LOGOUT, logoutWorker);
}

export default logoutWatcher;
