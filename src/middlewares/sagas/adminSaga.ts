import { call, put, takeEvery } from 'redux-saga/effects';
import {
  requestAdminInfo,
  successAdminInfo,
  failAdminInfo
} from 'middlewares/reduxTookits/adminSlice';
import { getAPI } from 'modules/apis';

export function* adminSaga() {
  yield takeEvery(requestAdminInfo.type, handleGetAdminInfo);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
export function* handleGetAdminInfo() {
  try {
    const res: Generator = yield call(getAdminInfo);
    yield put(successAdminInfo(res));
  } catch (error: any) {
    yield put(failAdminInfo(error.message));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
const getAdminInfo = async (): Promise<any> => {
  return getAPI('server/admin');
};
