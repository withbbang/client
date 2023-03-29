import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
import {
  requestLogIn,
  successLogIn,
  failLogIn,
  requestLogOut,
  successLogOut,
  failLogOut,
  requestForceLogOut,
  successForceLogOut,
  failForceLogOut
} from 'middlewares/reduxTookits/logSlice';
import { handleCodeMessage } from 'middlewares/reduxTookits/commonSlice';

export function* logSaga() {
  yield takeEvery(requestLogIn.type, handlePostLogIn);
  yield takeEvery(requestLogOut.type, handlePostLogOut);
  yield takeEvery(requestForceLogOut.type, handlePostForceLogOut);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlePostLogIn(data: any) {
  try {
    const res: Generator = yield call(postLogIn, data);
    yield put(successLogIn(res));
    yield put(handleCodeMessage(res));
  } catch (error: any) {
    yield put(failLogIn(error));
    yield put(handleCodeMessage(error));
  }
}

function* handlePostLogOut(data: any) {
  try {
    const res: Generator = yield call(postLogOut, data);
    yield put(successLogOut());
    yield put(handleCodeMessage(res));
  } catch (error: any) {
    yield put(failLogOut(error));
    yield put(handleCodeMessage(error));
  }
}

function* handlePostForceLogOut(data: any) {
  try {
    const res: Generator = yield call(postForceLogOut, data);
    yield put(successForceLogOut());
    yield put(handleCodeMessage(res));
  } catch (error: any) {
    yield put(failForceLogOut(error));
    yield put(handleCodeMessage(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postLogIn(data: any): Promise<any> {
  return postAPI('/server/log/in', data);
}

async function postLogOut(data: any): Promise<any> {
  return postAPI('/server/log/out', data);
}

async function postForceLogOut(data: any) {
  return postAPI('/server/force/log-out', data);
}
