import { call, put, takeEvery } from 'redux-saga/effects';
import {
  failPublicKey,
  requestPublicKey,
  successPublicKey
} from 'middlewares/reduxTookits/commonSlice';
import { getAPI } from 'modules/apis';

export function* commonSaga() {
  yield takeEvery(requestPublicKey.type, handleGetPublicKey);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handleGetPublicKey() {
  try {
    const res: Generator = yield call(getPublicKey);
    yield put(successPublicKey(res));
  } catch (error: any) {
    yield put(failPublicKey(error.message));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function getPublicKey(): Promise<any> {
  return getAPI('server/sign');
}
