import { call, put } from 'redux-saga/effects';
import { setUser, failedGetUser } from 'middlewares/reduxTookits/userSlice';
import { takeEvery } from 'redux-saga/effects';
import { getUser } from 'middlewares/reduxTookits/userSlice';

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

const fetchUser = async () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => {
      throw new Error(error.message);
    });
};
