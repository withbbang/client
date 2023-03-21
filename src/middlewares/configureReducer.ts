import { combineReducers } from '@reduxjs/toolkit';
import admin, { AdminState } from 'middlewares/reduxTookits/adminSlice';
import sign, { SignState } from 'middlewares/reduxTookits/signSlice';
import common, { CommonState } from 'middlewares/reduxTookits/commonSlice';
import log, { LogState } from 'middlewares/reduxTookits/logSlice';
import post, { PostState } from './reduxTookits/postSlice';
import categoryManage, {
  CategoryManageState
} from './reduxTookits/categoryManageSlice';

const rootReducer = combineReducers({
  admin,
  sign,
  log,
  common,
  post,
  categoryManage
  // add others...
});

interface PropState {
  admin: AdminState;
  sign: SignState;
  log: LogState;
  common: CommonState;
  post: PostState;
  categoryManage: CategoryManageState;
  // add others...
}

export { rootReducer, PropState };
