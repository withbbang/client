import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
import {
  failHeart,
  requestHeart,
  successHeart,
  requestSetHeart,
  successSetHeart,
  failSetHeart
} from 'middlewares/reduxTookits/heartSlice';

export function* heartSaga() {
  yield takeEvery(requestHeart.type, handlePostHeart);
  yield takeEvery(requestSetHeart.type, handlePostSetHeart);
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlePostHeart(data: any) {
  try {
    const res: Generator = yield call(postHeart, data);
    yield put(successHeart(res));
  } catch (error: any) {
    yield put(failHeart(error));
  }
}

function* handlePostSetHeart(data: any) {
  try {
    const res: Generator = yield call(postSetHeart, data);
    yield put(successSetHeart(res));
  } catch (error: any) {
    yield put(failSetHeart(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postHeart(data: any): Promise<any> {
  return postAPI('/server/common/heart', data);
}

// async function getHeart(data: any): Promise<any> {
//   const {
//     payload: { contentId }
//   } = data;
//   return getAPI(`/server/common/heart/count/${contentId}`);
// }

async function postSetHeart(data: any): Promise<any> {
  return postAPI('/server/common/set-heart', data);
}
