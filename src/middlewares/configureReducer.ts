import { combineReducers } from '@reduxjs/toolkit';
import user, { UserState } from 'middlewares/reduxTookits/userSlice';
import sign, { SignState } from 'middlewares/reduxTookits/signSlice';
import common, { CommonState } from 'middlewares/reduxTookits/commonSlice';
import log, { LogState } from 'middlewares/reduxTookits/logSlice';

const rootReducer = combineReducers({
  user,
  sign,
  log,
  common
  // add others...
});

interface PropState {
  user: UserState;
  sign: SignState;
  log: LogState;
  common: CommonState;
  // add others...
}

export { rootReducer, PropState };
