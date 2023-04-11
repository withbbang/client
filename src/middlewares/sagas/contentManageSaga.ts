import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
import {
  requestContents,
  successContents,
  failContents
} from 'middlewares/reduxTookits/contentManageSlice';

export function* contentManageSaga() {
  yield takeEvery(requestContents.type, handlePostContents);
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

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postContents(data: any): Promise<any> {
  return postAPI('/server/admin/content-manage/contents', data);
}
