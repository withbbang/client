import { call, put, takeEvery } from 'redux-saga/effects';
import {
  failKeyPair,
  requestKeyPair,
  successKeyPair
} from 'middlewares/reduxTookits/commonSlice';
import { getAPI } from 'modules/apis';

export function* commonSaga() {
  yield takeEvery(requestKeyPair.type, handleGetKeyPair);
}

export function* handleGetKeyPair() {
  try {
    const res: Generator = yield call(getKeyPair);
    yield put(successKeyPair(res));
  } catch (error: any) {
    yield put(failKeyPair(error.message));
  }
}

async function getKeyPair(): Promise<any> {
  return getAPI('server/sign');
}
