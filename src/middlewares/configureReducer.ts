import { combineReducers } from '@reduxjs/toolkit';
import admin, { AdminState } from 'middlewares/reduxTookits/adminSlice';
import sign, { SignState } from 'middlewares/reduxTookits/signSlice';
import common, { CommonState } from 'middlewares/reduxTookits/commonSlice';
import log, { LogState } from 'middlewares/reduxTookits/logSlice';
import post, { PostState } from './reduxTookits/postSlice';
import categoryManage, {
  CategoryManageState
} from './reduxTookits/categoryManageSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  admin,
  sign,
  log,
  common,
  post,
  categoryManage
  // add others...
});

/**
 * 새로고침 해도 state 변화 없도록 방지
 * key, storage필수
 * storage: localStorage를 사용하여 state 값 유지
 * whitelist: 유지하고 싶은 state값들
 * blacklist: 유지하지 않을 state값들
 */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['admin', 'log', 'common', 'categoryManage'] // add others...
};

/**
 * store에 넣을 새로운 persist reducer 반환
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

interface PropState {
  admin: AdminState;
  sign: SignState;
  log: LogState;
  common: CommonState;
  post: PostState;
  categoryManage: CategoryManageState;
  // add others...
}

export { persistedReducer, PropState };
