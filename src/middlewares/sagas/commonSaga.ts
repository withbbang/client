import { call, put, takeEvery } from 'redux-saga/effects';
import {
  failPublicKey,
  failSideBarCategory,
  failVisitCount,
  requestPublicKey,
  requestSideBarCategory,
  requestVisitCount,
  successPublicKey,
  successSideBarCategory,
  successVisitCount
} from 'middlewares/reduxTookits/commonSlice';
import { getAPI, postAPI } from 'modules/apis';

export function* commonSaga() {
  yield takeEvery(requestPublicKey.type, handleGetPublicKey);
  yield takeEvery(requestVisitCount.type, handleGetVisitCount);
  yield takeEvery(requestSideBarCategory.type, handleGetSideBarCategories);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handleGetPublicKey() {
  try {
    const res: Generator = yield call(getPublicKey);
    yield put(successPublicKey(res));
  } catch (error: any) {
    yield put(failPublicKey(error));
  }
}

function* handleGetVisitCount() {
  try {
    const res: Generator = yield call(getVisitCount);
    yield put(successVisitCount(res));
  } catch (error: any) {
    yield put(failVisitCount(error));
  }
}

function* handleGetSideBarCategories(data: any) {
  try {
    const res: Generator = yield call(postSideBarCategories, data);
    yield put(successSideBarCategory(res));
  } catch (error: any) {
    yield put(failSideBarCategory(error));
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

async function postSideBarCategories(data: any) {
  return postAPI('/server/common/categories', data);
}
