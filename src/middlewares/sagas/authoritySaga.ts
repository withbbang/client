import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
import {
  failAuthority,
  requestAuthority,
  successAuthority
} from 'middlewares/reduxTookits/authoritySlice';
import { handleCodeMessage } from 'middlewares/reduxTookits/commonSlice';

export function* authoritySaga() {
  yield takeEvery(requestAuthority.type, handlePostAuthority);
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlePostAuthority(data: any) {
  try {
    const res: Generator = yield call(postAuthorities, data);
    yield put(successAuthority(res));
    yield put(handleCodeMessage(res));
  } catch (error: any) {
    yield put(failAuthority(error));
    yield put(handleCodeMessage(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postAuthorities(data: any): Promise<any> {
  return postAPI('/server/admin/authority', data);
}
