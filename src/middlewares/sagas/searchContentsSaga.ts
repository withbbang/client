import {
  requestSearchContents,
  successSearchContents,
  failSearchContents
} from 'middlewares/reduxTookits/searchContents';
import { postAPI } from 'modules/apis';
import { call, put, takeEvery } from 'redux-saga/effects';

export function* searchContentsSaga() {
  yield takeEvery(requestSearchContents.type, handlePostSearchContents);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////

function* handlePostSearchContents(data: any) {
  try {
    const res: Generator = yield call(postSearchContents, data);
    yield put(successSearchContents(res));
  } catch (error: any) {
    yield put(failSearchContents(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postSearchContents(data: any) {
  return postAPI('/server/common/search-contents', data);
}
