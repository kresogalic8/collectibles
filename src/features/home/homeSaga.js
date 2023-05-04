import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchSuitesRequest, fetchSuitesSuccess, fetchSuitesFailure } from './homeSlice';
import { fetchSuites as fetchSuitesApi } from '../../api';

function* fetchSuites() {
  try {
    const data = yield call(fetchSuitesApi);
    yield put(fetchSuitesSuccess(data.suites));
  } catch (error) {
    yield put(fetchSuitesFailure());
  }
}

export default function* homeSaga() {
  yield takeEvery(fetchSuitesRequest.type, fetchSuites);
}
