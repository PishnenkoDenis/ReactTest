import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import { $authHost } from '../../api';
import { LIST_REQUESTED } from '../../utils/constants';
import { getListFailed, getListSuccessed } from '../actions/listingActions';

function* listWorker() {
  try {
    const { data } = yield call($authHost.get, '/v3.1/all');
    yield put(getListSuccessed(data));
  } catch (error) {
    yield put(getListFailed(error.response.data.error));
  }
}

function* listWatcher() {
  yield takeLatest(LIST_REQUESTED, listWorker);
}

export default listWatcher;
