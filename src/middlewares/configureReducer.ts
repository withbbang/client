import { combineReducers } from '@reduxjs/toolkit';
import admin, { AdminState } from 'middlewares/reduxTookits/adminSlice';
import sign, { SignState } from 'middlewares/reduxTookits/signSlice';
import common, { CommonState } from 'middlewares/reduxTookits/commonSlice';
import log, { LogState } from 'middlewares/reduxTookits/logSlice';
import post, { PostState } from './reduxTookits/postSlice';

const rootReducer = combineReducers({
  admin,
  sign,
  log,
  common,
  post
  // add others...
});

interface PropState {
  admin: AdminState;
  sign: SignState;
  log: LogState;
  common: CommonState;
  post: PostState;
  // add others...
}

export { rootReducer, PropState };
