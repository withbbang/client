import { createSlice } from '@reduxjs/toolkit';
import { CommonState } from './commonSlice';

export interface LogState {
  isLoggedIn?: boolean;
  isLoggedOut?: boolean;
  id?: string;
  auth?: number;
}

export const initialState: LogState = {
  isLoggedIn: false,
  isLoggedOut: false,
  id: '',
  auth: -1
};

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    requestLogIn(state: LogState, action) {},
    successLogIn(state: LogState, action) {
      state.isLoggedIn = true;
      state.isLoggedOut = false;
      state.id = action.payload.id;
      state.auth = action.payload.auth;
    },
    failLogIn(state: LogState, action) {
      state.isLoggedIn = false;
      state.isLoggedOut = false;
      state.id = '';
      state.auth = -1;
    },
    requestLogOut(state: LogState, action) {
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    },
    successLogOut(state: LogState, action) {
      state.isLoggedIn = false;
      state.isLoggedOut = true;
      state.id = '';
      state.auth = -1;
    },
    failLogOut(state: LogState, action) {
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    },
    requestForceLogOut(state: LogState, action) {
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    },
    successForceLogOut(state: LogState, action) {
      state.isLoggedIn = false;
      state.isLoggedOut = true;
      state.id = '';
      state.auth = -1;
    },
    failForceLogOut(state: LogState, action) {
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

export const logExtraReducers = {
  'log/requestLogIn': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'log/successLogIn': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'log/failLogIn': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'log/requestLogOut': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'log/successLogOut': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'log/failLogOut': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'log/requestForceLogOut': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'log/successForceLogOut': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'log/failForceLogOut': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default logSlice.reducer;
