import { call, put, takeEvery } from 'redux-saga/effects';
import { getAPI, postAPI } from 'modules/apis';
import {
  requestCategory,
  successCategory,
  failCategory,
  requestCreateCategory,
  successCreateCategory,
  failCreateCategory,
  requestUpdateCategory,
  successUpdateCategory,
  failUpdateCategory
} from 'middlewares/reduxTookits/categoryManageSlice';

export function* categoryManageSaga() {
  yield takeEvery(requestCategory.type, handleGetCategories);
  yield takeEvery(requestCreateCategory.type, handlePostCreateCategory);
  yield takeEvery(requestUpdateCategory.type, handlePostUpdateCategory);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handleGetCategories() {
  try {
    const res: Generator = yield call(getCategories);
    yield put(successCategory(res));
  } catch (error: any) {
    yield put(failCategory(error.message));
  }
}

function* handlePostCreateCategory(data: any) {
  try {
    const res: Generator = yield call(postCreateCategory, data);
    yield put(successCreateCategory(res));
  } catch (error: any) {
    yield put(failCreateCategory(error.message));
  }
}

function* handlePostUpdateCategory(data: any) {
  try {
    const res: Generator = yield call(postUpdateCategory, data);
    yield put(successUpdateCategory(res));
  } catch (error: any) {
    yield put(failUpdateCategory(error.message));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function getCategories(): Promise<any> {
  return getAPI('server/category');
}

async function postCreateCategory(data: any): Promise<any> {
  return postAPI('server/category/create', data);
}

async function postUpdateCategory(data: any): Promise<any> {
  return postAPI('server/category/update', data);
}
