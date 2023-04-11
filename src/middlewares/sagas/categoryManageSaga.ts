import { call, put, takeEvery } from 'redux-saga/effects';
import { postAPI } from 'modules/apis';
import {
  requestCategory,
  successCategory,
  failCategory,
  requestCreateCategory,
  successCreateCategory,
  failCreateCategory,
  requestSingleUpdateCategory,
  successSingleUpdateCategory,
  failSingleUpdateCategory,
  requestMultiUpdateCategory,
  successMultiUpdateCategory,
  failMultiUpdateCategory,
  requestDeleteRestoreCategory,
  successDeleteRestoreCategory,
  failDeleteRestoreCategory
} from 'middlewares/reduxTookits/categoryManageSlice';

export function* categoryManageSaga() {
  yield takeEvery(requestCategory.type, handlePostCategories);
  yield takeEvery(requestCreateCategory.type, handlePostCreateCategory);
  yield takeEvery(
    requestSingleUpdateCategory.type,
    handlePostSingleUpdateCategory
  );
  yield takeEvery(requestMultiUpdateCategory.type, handlePostUpdateCategory);
  yield takeEvery(
    requestDeleteRestoreCategory.type,
    handlePostDeleteRestoreCategory
  );
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlePostCategories(data: any) {
  try {
    const res: Generator = yield call(postCategories, data);
    yield put(successCategory(res));
  } catch (error: any) {
    yield put(failCategory(error));
  }
}

function* handlePostCreateCategory(data: any) {
  try {
    const res: Generator = yield call(postCreateCategory, data);
    yield put(successCreateCategory(res));
  } catch (error: any) {
    yield put(failCreateCategory(error));
  }
}

function* handlePostSingleUpdateCategory(data: any) {
  try {
    const res: Generator = yield call(postSingleUpdateCategory, data);
    yield put(successSingleUpdateCategory(res));
  } catch (error: any) {
    yield put(failSingleUpdateCategory(error));
  }
}

function* handlePostUpdateCategory(data: any) {
  try {
    const res: Generator = yield call(postUpdateCategory, data);
    yield put(successMultiUpdateCategory(res));
  } catch (error: any) {
    yield put(failMultiUpdateCategory(error));
  }
}

function* handlePostDeleteRestoreCategory(data: any) {
  try {
    const res: Generator = yield call(postDeleteRestoreCategory, data);
    yield put(successDeleteRestoreCategory(res));
  } catch (error: any) {
    yield put(failDeleteRestoreCategory(error));
  }
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////      API function      ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
async function postCategories(data: any): Promise<any> {
  return postAPI('/server/admin/category-manage/categories', data);
}

async function postCreateCategory(data: any): Promise<any> {
  return postAPI('/server/admin/category-manage/create', data);
}

async function postSingleUpdateCategory(data: any): Promise<any> {
  return postAPI('/server/admin/category-manage/single-update', data);
}

async function postUpdateCategory(data: any): Promise<any> {
  return postAPI('/server/admin/category-manage/multi-update', data);
}

async function postDeleteRestoreCategory(data: any) {
  return postAPI('/server/admin/category-manage/delete-restore', data);
}
