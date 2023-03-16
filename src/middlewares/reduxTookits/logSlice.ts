import { createSlice } from '@reduxjs/toolkit';

export interface LogState {
  message: string;
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  isLoggedIn?: boolean;
  isLoggedOut?: boolean;
}

export const initialState: LogState = {
  message: '',
  isFetching: false,
  isSuccess: false,
  isFail: false,
  isLoggedIn: false,
  isLoggedOut: false
};

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    requestLogIn(state: LogState, action) {
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successLogIn(state: LogState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isLoggedIn = true;
      state.isLoggedOut = false;
    },
    failLogIn(state: LogState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    },
    requestLogOut(state: LogState, action) {
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
      state.isLoggedIn = false;
      state.isLoggedOut = false;
    },
    successLogOut(state: LogState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isLoggedIn = false;
      state.isLoggedOut = true;
    },
    failLogOut(state: LogState, action) {
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
  failLogOut
} = logSlice.actions;

export default logSlice.reducer;
