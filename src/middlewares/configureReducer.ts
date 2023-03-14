import { combineReducers } from '@reduxjs/toolkit';
import users from 'middlewares/reduxTookits/userSlice';
import sign, { SignState } from 'middlewares/reduxTookits/signSlice';
import common, { CommonState } from './reduxTookits/commonSlice';

const rootReducer = combineReducers({
  users,
  sign,
  common
  // add others...
});

interface PropState {
  common: CommonState;
  sign: SignState;
  // add others...
}

export { rootReducer, PropState };
