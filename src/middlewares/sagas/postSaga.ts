import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
import {
  failPost,
  requestPost,
  successPost
} from 'middlewares/reduxTookits/postSlice';

export function* postSaga() {
  yield takeEvery(requestPost.type, handlePostPost);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlePostPost(data: any) {
  try {
    const res: Generator = yield call(postPost, data);
    yield put(successPost(res));
  } catch (error: any) {
    yield put(failPost(error.message));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postPost(data: any): Promise<any> {
  return postAPI('/server/admin/post', data);
}
