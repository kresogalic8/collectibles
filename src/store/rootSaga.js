import { all } from 'redux-saga/effects';
import homeSaga from '../features/home/homeSaga';

export default function* rootSaga() {
  yield all([homeSaga()]);
}
