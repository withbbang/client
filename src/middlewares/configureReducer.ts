import { combineReducers } from '@reduxjs/toolkit';
import admin, { AdminState } from 'middlewares/reduxTookits/adminSlice';
import sign, { SignState } from 'middlewares/reduxTookits/signSlice';
import common, { CommonState } from 'middlewares/reduxTookits/commonSlice';
import log, { LogState } from 'middlewares/reduxTookits/logSlice';

const rootReducer = combineReducers({
  admin,
  sign,
  log,
  common
  // add others...
});

interface PropState {
  admin: AdminState;
  sign: SignState;
  log: LogState;
  common: CommonState;
  // add others...
}

export { rootReducer, PropState };
