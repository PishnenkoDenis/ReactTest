import {
  put, select, takeLatest,
} from 'redux-saga/effects';

import { CHECK_USER_REQUESTED } from '../../utils/constants';
import { checkUserFailed, checkUserSuccessed } from '../actions/checkUserActions';

function* checkUserWorker() {
  const cheked = yield select((state) => state.auth.check);
  if (!cheked) yield put(checkUserFailed());
  else yield put(checkUserSuccessed());
}

function* checkUserWatcher() {
  yield takeLatest(CHECK_USER_REQUESTED, checkUserWorker);
}

export default checkUserWatcher;
