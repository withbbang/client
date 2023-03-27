import { createSlice } from '@reduxjs/toolkit';

export interface LogState {
  code?: string;
  message: string;
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  isLoggedIn?: boolean;
  isLoggedOut?: boolean;
  id?: string;
  auth?: number;
}

export const initialState: LogState = {
  code: '',
  message: '',
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
      state.code = '';
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successLogIn(state: LogState, action) {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isLoggedIn = true;
      state.isLoggedOut = false;
      state.id = action.payload.id;
      state.auth = action.payload.auth;
    },
    failLogIn(state: LogState, action) {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.isLoggedIn = false;
      state.isLoggedOut = false;
      state.id = '';
      state.auth = -1;
    },
    requestLogOut(state: LogState, action) {
      state.code = '';
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    },
    successLogOut(state: LogState, action) {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isLoggedIn = false;
      state.isLoggedOut = true;
      state.id = '';
      state.auth = -1;
    },
    failLogOut(state: LogState, action) {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    },
    requestForceLogOut(state: LogState, action) {
      state.code = '';
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    },
    successForceLogOut(state: LogState, action) {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isLoggedIn = false;
      state.isLoggedOut = true;
      state.id = '';
      state.auth = -1;
    },
    failForceLogOut(state: LogState, action) {
      state.code = action.payload.code;
      state.message = action.payload.message;
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
