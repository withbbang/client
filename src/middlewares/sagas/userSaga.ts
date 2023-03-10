import { call, put } from 'redux-saga/effects';
import { setUser, failedGetUser } from 'middlewares/reduxTookits/userSlice';
import { takeEvery } from 'redux-saga/effects';
import { getUser } from 'middlewares/reduxTookits/userSlice';
import { getAPI } from 'modules/apis';

export function* userSaga() {
  yield takeEvery(getUser.type, handleGetUser);
}

export function* handleGetUser() {
  try {
    const res: Generator = yield call(fetchUser);
    yield put(setUser(res));
  } catch (error: any) {
    yield put(failedGetUser(error.message));
  }
}

const fetchUser = async (): Promise<any> => {
  return getAPI('https://jsonplaceholder.typicode.com/users');
};
