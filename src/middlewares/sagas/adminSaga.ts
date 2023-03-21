import { call, put, takeEvery } from 'redux-saga/effects';
import {
  requestAdminInfo,
  successAdminInfo,
  failAdminInfo
} from 'middlewares/reduxTookits/adminSlice';
import { postAPI } from 'modules/apis';

export function* adminSaga() {
  yield takeEvery(requestAdminInfo.type, handleGetAdminInfo);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handleGetAdminInfo() {
  try {
    const res: Generator = yield call(postAdminInfo);
    yield put(successAdminInfo(res));
  } catch (error: any) {
    yield put(failAdminInfo(error.message));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postAdminInfo(): Promise<any> {
  return postAPI('/server/admin/info');
}
