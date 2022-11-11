import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';

import $host from '../../api';
import { LOGIN_REQUESTED } from '../../utils/constants';
import { loginFailed, loginSuccessed } from '../actions/authActions';

function* loginWorker({ payload }) {
  try {
    const { data } = yield call($host.post, '/api/login', payload);
    yield put(loginSuccessed(data));
    const cheked = yield select((state) => state.auth.check);
    if (cheked) localStorage.setItem('token', data.token);
  } catch (error) {
    yield put(loginFailed(error.response.data.error));
  }
}

function* loginWatcher() {
  yield takeLatest(LOGIN_REQUESTED, loginWorker);
}

export default loginWatcher;
