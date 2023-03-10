import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
import {
  failSignIn,
  requestSignIn,
  successSignIn
} from 'middlewares/reduxTookits/signSlice';

export function* signSaga() {
  yield takeEvery(requestSignIn.type, handlePostSignIn);
}

export function* handlePostSignIn(data: any) {
  try {
    const res: Generator = yield call(postSignIn, data);
    yield put(successSignIn(res));
  } catch (error: any) {
    yield put(failSignIn(error.message));
  }
}

async function postSignIn(data: any): Promise<any> {
  return postAPI('server/sign/in', data);
}
