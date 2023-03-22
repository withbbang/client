import { call, put, takeEvery } from 'redux-saga/effects';
import {
  failPublicKey,
  failVisitCount,
  requestPublicKey,
  requestVisitCount,
  successPublicKey,
  successVisitCount
} from 'middlewares/reduxTookits/commonSlice';
import { getAPI } from 'modules/apis';

export function* commonSaga() {
  yield takeEvery(requestPublicKey.type, handleGetPublicKey);
  yield takeEvery(requestVisitCount.type, handleGetVisitCount);
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

function* handleGetVisitCount() {
  try {
    const res: Generator = yield call(getVisitCount);
    yield put(successVisitCount(res));
  } catch (error: any) {
    yield put(failVisitCount(error.message));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function getPublicKey(): Promise<any> {
  return getAPI('/server/common/public-key');
}

async function getVisitCount() {
  return getAPI('/server/common/visit-count');
}
