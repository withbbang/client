import { combineReducers } from '@reduxjs/toolkit';
import users from 'middlewares/reduxTookits/userSlice';
import common, { CommonState } from './reduxTookits/commonSlice';

const rootReducer = combineReducers({
  users,
  common
  // add others...
});

interface PropState {
  common: CommonState;
  // add others...
}

export { rootReducer, PropState };
