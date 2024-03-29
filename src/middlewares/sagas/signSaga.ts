import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
import {
  requestSignUp,
  successSignUp,
  failSignUp,
  requestSignOut,
  successSignOut,
  failSignOut
} from 'middlewares/reduxTookits/signSlice';
import { handleCodeMessage } from 'middlewares/reduxTookits/commonSlice';

export function* signSaga() {
  yield takeEvery(requestSignUp.type, handlePostSignUp);
  yield takeEvery(requestSignOut.type, handlePostSignOut);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlePostSignUp(data: any) {
  try {
    const res: Generator = yield call(postSignUp, data);
    yield put(successSignUp());
    yield put(handleCodeMessage(res));
  } catch (error: any) {
    yield put(failSignUp(error));
    yield put(handleCodeMessage(error));
  }
}

function* handlePostSignOut(data: any) {
  try {
    const res: Generator = yield call(postSignOut, data);
    yield put(successSignOut());
    yield put(handleCodeMessage(res));
  } catch (error: any) {
    yield put(failSignOut(error));
    yield put(handleCodeMessage(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postSignUp(data: any): Promise<any> {
  return postAPI('/server/sign/up', data);
}

async function postSignOut(data: any): Promise<any> {
  return postAPI('/server/sign/out', data);
}
