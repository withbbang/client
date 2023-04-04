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
import { handleCodeMessage } from 'middlewares/reduxTookits/commonSlice';

export function* categoryManageSaga() {
  yield takeEvery(requestCategory.type, handlepostCategories);
  yield takeEvery(requestCreateCategory.type, handlePostCreateCategory);
  yield takeEvery(requestUpdateCategory.type, handlePostUpdateCategory);
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////        process         ///////////////////////////
//////////////////////////////////////////////////////////////////////////////
function* handlepostCategories(data: any) {
  try {
    const res: Generator = yield call(postCategories, data);
    yield put(successCategory(res));
    yield put(handleCodeMessage(res));
  } catch (error: any) {
    yield put(failCategory(error));
    yield put(handleCodeMessage(error));
  }
}

function* handlePostCreateCategory(data: any) {
  try {
    const res: Generator = yield call(postCreateCategory, data);
    yield put(successCreateCategory());
    yield put(handleCodeMessage(res));
  } catch (error: any) {
    yield put(failCreateCategory(error));
    yield put(handleCodeMessage(error));
  }
}

function* handlePostUpdateCategory(data: any) {
  try {
    const res: Generator = yield call(postUpdateCategory, data);
    yield put(successUpdateCategory());
    yield put(handleCodeMessage(res));
  } catch (error: any) {
    yield put(failUpdateCategory(error));
    yield put(handleCodeMessage(error));
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

async function postUpdateCategory(data: any): Promise<any> {
  return postAPI('/server/admin/category-manage/update', data);
}
