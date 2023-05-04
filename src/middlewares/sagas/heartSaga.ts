import { call, put, takeEvery } from 'redux-saga/effects';
import { getAPI, postAPI } from 'modules/apis';
import {
  failHeartsCount,
  requestHeartsCount,
  successHeartsCount
} from 'middlewares/reduxTookits/heartSlice';

export function* heartSaga() {
  yield takeEvery(requestHeartsCount.type, handlePostAuthority);
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlePostAuthority(data: any) {
  try {
    const res: Generator = yield call(getHeartsCount, data);
    yield put(successHeartsCount(res));
  } catch (error: any) {
    yield put(failHeartsCount(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function getHeartsCount(data: any): Promise<any> {
  const {
    payload: { contentId }
  } = data;
  return getAPI(`/server/common/heart/count/${contentId}`);
}
