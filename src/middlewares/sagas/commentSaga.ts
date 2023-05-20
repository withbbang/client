import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
import {
  requestComments,
  successComments,
  failComments,
  requestCreateComment,
  successCreateComment,
  failCreateComment,
  requestUpdateComment,
  successUpdateComment,
  failUpdateComment,
  requestDeleteComment,
  successDeleteComment,
  failDeleteComment
} from 'middlewares/reduxTookits/commentSlice';

export function* commentSaga() {
  yield takeEvery(requestComments.type, handlePostComments);
  yield takeEvery(requestCreateComment.type, handlePostCreateComment);
  yield takeEvery(requestUpdateComment.type, handlePostUpdateComment);
  yield takeEvery(requestDeleteComment.type, handlePostDeleteComment);
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlePostComments(data: any) {
  try {
    const res: Generator = yield call(postComments, data);
    yield put(successComments(res));
  } catch (error: any) {
    yield put(failComments(error));
  }
}

function* handlePostCreateComment(data: any) {
  try {
    const res: Generator = yield call(postCreateComment, data);
    yield put(successCreateComment(res));
  } catch (error: any) {
    yield put(failCreateComment(error));
  }
}

function* handlePostUpdateComment(data: any) {
  try {
    const res: Generator = yield call(postUpdateComment, data);
    yield put(successUpdateComment(res));
  } catch (error: any) {
    yield put(failUpdateComment(error));
  }
}

function* handlePostDeleteComment(data: any) {
  try {
    const res: Generator = yield call(postDeleteComment, data);
    yield put(successDeleteComment(res));
  } catch (error: any) {
    yield put(failDeleteComment(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postComments(data: any): Promise<any> {
  return postAPI('/server/common/comments/', data);
}

async function postCreateComment(data: any): Promise<any> {
  return postAPI('/server/common/create-comment', data);
}

async function postUpdateComment(data: any): Promise<any> {
  return postAPI('/server/common/update-comment', data);
}

async function postDeleteComment(data: any): Promise<any> {
  return postAPI('/server/common/delete-comment', data);
}
