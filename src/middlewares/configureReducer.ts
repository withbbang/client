import { combineReducers } from '@reduxjs/toolkit';
import users from 'middlewares/reduxTookits/userSlice';
import sign, { SignState } from 'middlewares/reduxTookits/signSlice';
import common, { CommonState } from 'middlewares/reduxTookits/commonSlice';
import log, { LogState } from 'middlewares/reduxTookits/logSlice';

const rootReducer = combineReducers({
  users,
  sign,
  log,
  common
  // add others...
});

interface PropState {
  common: CommonState;
  sign: SignState;
  log: LogState;
  // add others...
}

export { rootReducer, PropState };
