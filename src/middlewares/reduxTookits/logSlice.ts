import { createSlice } from '@reduxjs/toolkit';

export interface LogState {
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  isLoggedIn?: boolean;
  isLoggedOut?: boolean;
  id?: string;
  auth?: number;
}

export const initialState: LogState = {
  isFetching: false,
  isSuccess: false,
  isFail: false,
  isLoggedIn: false,
  isLoggedOut: false,
  id: '',
  auth: -1
};

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    requestLogIn(state: LogState, action) {
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successLogIn(state: LogState, action) {
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isLoggedIn = true;
      state.isLoggedOut = false;
      state.id = action.payload.id;
      state.auth = action.payload.auth;
    },
    failLogIn(state: LogState) {
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.isLoggedIn = false;
      state.isLoggedOut = false;
      state.id = '';
      state.auth = -1;
    },
    requestLogOut(state: LogState, action) {
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    },
    successLogOut(state: LogState) {
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isLoggedIn = false;
      state.isLoggedOut = true;
      state.id = '';
      state.auth = -1;
    },
    failLogOut(state: LogState, action) {
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    },
    requestForceLogOut(state: LogState, action) {
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    },
    successForceLogOut(state: LogState) {
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isLoggedIn = false;
      state.isLoggedOut = true;
      state.id = '';
      state.auth = -1;
    },
    failForceLogOut(state: LogState) {
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    }
  }
});

export const {
  requestLogIn,
  successLogIn,
  failLogIn,
  requestLogOut,
  successLogOut,
  failLogOut,
  requestForceLogOut,
  successForceLogOut,
  failForceLogOut
} = logSlice.actions;

export default logSlice.reducer;
