import { call, put, takeEvery } from 'redux-saga/effects';
import { getAPI, postAPI } from 'modules/apis';
import {
  requestComments,
  successComments,
  failComments
} from 'middlewares/reduxTookits/commentSlice';

export function* commentSaga() {
  yield takeEvery(requestComments.type, handleGetComments);
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handleGetComments(data: any) {
  try {
    const res: Generator = yield call(getComments, data);
    yield put(successComments(res));
  } catch (error: any) {
    yield put(failComments(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function getComments(data: any): Promise<any> {
  const {
    payload: { contentId }
  } = data;
  return getAPI(`/server/common/comments/${contentId}`);
}
