import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
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
  yield takeEvery(requestCategory.type, handlepostCategories);
  yield takeEvery(requestCreateCategory.type, handlePostCreateCategory);
  yield takeEvery(requestUpdateCategory.type, handlePostUpdateCategory);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlepostCategories() {
  try {
    const res: Generator = yield call(postCategories);
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
async function postCategories(): Promise<any> {
  return postAPI('/server/admin/category-manage/categories');
}

async function postCreateCategory(data: any): Promise<any> {
  return postAPI('/server/admin/category-manage/create', data);
}

async function postUpdateCategory(data: any): Promise<any> {
  return postAPI('/server/admin/category-manage/update', data);
}