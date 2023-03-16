import { call, put, takeEvery } from 'redux-saga/effects';
import {
  requestUserInfo,
  successUserInfo,
  failUserInfo
} from 'middlewares/reduxTookits/userSlice';
import { getAPI } from 'modules/apis';

export function* userSaga() {
  yield takeEvery(requestUserInfo.type, handleGetUser);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
export function* handleGetUser() {
  try {
    const res: Generator = yield call(fetchUser);
    yield put(successUserInfo(res));
  } catch (error: any) {
    yield put(failUserInfo(error.message));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
const fetchUser = async (): Promise<any> => {
  return getAPI('server/user');
};
