import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import {
  failKeyPair,
  requestKeyPair,
  successKeyPair
} from 'middlewares/reduxTookits/commonSlice';

export function* commonSaga() {
  yield takeEvery(requestKeyPair.type, handleFetchKeyPair);
}

export function* handleFetchKeyPair() {
  try {
    const res: Generator = yield call(fetchKeyPair);
    yield put(successKeyPair(res));
  } catch (error: any) {
    yield put(failKeyPair(error.message));
  }
}

const fetchKeyPair = async () => {
  return fetch('server/key')
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => {
      throw new Error(error.message);
    });
};
