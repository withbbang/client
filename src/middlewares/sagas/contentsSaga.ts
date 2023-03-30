import { handleCodeMessage } from 'middlewares/reduxTookits/commonSlice';
import {
  failContents,
  requestContents,
  successContents
} from 'middlewares/reduxTookits/contentsSlice';
import { postAPI } from 'modules/apis';
import { call, put, takeEvery } from 'redux-saga/effects';

export function* contentsSaga() {
  yield takeEvery(requestContents.type, handlePostContents);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////

function* handlePostContents(data: any) {
  try {
    const res: Generator = yield call(postContents, data);
    yield put(successContents(res));
    yield put(handleCodeMessage(res));
  } catch (error: any) {
    yield put(failContents(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postContents(data: any) {
  return postAPI('/server/contents', data);
}
