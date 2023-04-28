import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
import {
  requestContents,
  successContents,
  failContents,
  requestContent,
  successContent,
  failContent,
  requestCreateContent,
  successCreateContent,
  failCreateContent,
  requestDeleteRestoreContent,
  successDeleteRestoreContent,
  failDeleteRestoreContent,
  requestUpdateContent,
  successUpdateContent,
  failUpdateContent
} from 'middlewares/reduxTookits/contentManageSlice';

export function* contentManageSaga() {
  yield takeEvery(requestContents.type, handlePostContents);
  yield takeEvery(requestContent.type, handlePostContent);
  yield takeEvery(requestCreateContent.type, handlePostCreateContent);
  yield takeEvery(
    requestDeleteRestoreContent.type,
    handlePostDeleteRestoreContent
  );
  yield takeEvery(requestUpdateContent.type, handlePostUpdateContent);
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

function* handlePostCreateContent(data: any) {
  try {
    const res: Generator = yield call(postCreateContent, data);
    yield put(successCreateContent(res));
  } catch (error: any) {
    yield put(failCreateContent(error));
  }
}

function* handlePostDeleteRestoreContent(data: any) {
  try {
    const res: Generator = yield call(postDeleteRestoreContent, data);
    yield put(successDeleteRestoreContent(res));
  } catch (error: any) {
    yield put(failDeleteRestoreContent(error));
  }
}

function* handlePostUpdateContent(data: any) {
  try {
    const res: Generator = yield call(postUpdateContent, data);
    yield put(successUpdateContent(res));
  } catch (error: any) {
    yield put(failUpdateContent(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postContents(data: any): Promise<any> {
  return postAPI('/server/admin/content-manage/contents', data);
}

async function postContent(data: any): Promise<any> {
  return postAPI('/server/admin/content-manage/content', data);
}

async function postCreateContent(data: any): Promise<any> {
  return postAPI('/server/admin/content-manage/create-content', data);
}

async function postDeleteRestoreContent(data: any) {
  return postAPI('/server/admin/content-manage/delete-restore', data);
}

async function postUpdateContent(data: any) {
  return postAPI('/server/admin/content-manage/update-content', data);
}
