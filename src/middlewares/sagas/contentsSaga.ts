import {
  failContents,
  requestContents,
  successContents,
  requestContent,
  successContent,
  failContent
} from 'middlewares/reduxTookits/contentsSlice';
import { postAPI } from 'modules/apis';
import { call, put, takeEvery } from 'redux-saga/effects';

export function* contentsSaga() {
  yield takeEvery(requestContents.type, handlePostContents);
  yield takeEvery(requestContent.type, handlePostContent);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlePostContents(data: any) {
  try {
    const res: Generator = yield call(postContents, data);
    yield put(successContents(res));
  } catch (error: any) {
    yield put(failContents(error));
  }
}

function* handlePostContent(data: any) {
  try {
    const res: Generator = yield call(postContent, data);
    yield put(successContent(res));
  } catch (error: any) {
    yield put(failContent(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postContents(data: any) {
  return postAPI('/server/common/contents', data);
}

async function postContent(data: any) {
  return postAPI('/server/common/content', data);
}
