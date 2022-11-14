import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import { $authHost } from '../../api';
import { DETAILS_REQUESTED } from '../../utils/constants';
import { getDetailsFailed, getDetailsSuccessed } from '../actions/detailsActions';

function* detailsWorker({ payload }) {
  try {
    const { data } = yield call($authHost.get, `/v3.1/alpha/${payload}`);
    yield put(getDetailsSuccessed(data));
  } catch (error) {
    yield put(getDetailsFailed(error.response.data.error));
  }
}

function* detailsWatcher() {
  yield takeLatest(DETAILS_REQUESTED, detailsWorker);
}

export default detailsWatcher;
