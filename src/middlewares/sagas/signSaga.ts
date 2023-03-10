import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
import {
  failSignIn,
  failSignUp,
  requestSignIn,
  requestSignUp,
  successSignIn,
  successSignUp
} from 'middlewares/reduxTookits/signSlice';

export function* signSaga() {
  yield takeEvery(requestSignIn.type, handlePostSignIn);
  yield takeEvery(requestSignUp.type, handlePostSignUp);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlePostSignIn(data: any) {
  try {
    const res: Generator = yield call(postSignIn, data);
    yield put(successSignIn(res));
  } catch (error: any) {
    yield put(failSignIn(error.message));
  }
}

function* handlePostSignUp(data: any) {
  try {
    const res: Generator = yield call(postSignUp, data);
    yield put(successSignUp(res));
  } catch (error: any) {
    yield put(failSignUp(error.message));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postSignIn(data: any): Promise<any> {
  return postAPI('server/sign/in', data);
}

async function postSignUp(data: any): Promise<any> {
  return postAPI('server/sign/up', data);
}
