import { createSlice } from '@reduxjs/toolkit';

export interface LogState {
  isFetching: boolean;
  message: string;
  isSuccess: boolean;
  isFail: boolean;
  isLoggedIn?: boolean;
  isLoggedOut?: boolean;
}

export const initialState: LogState = {
  isFetching: false,
  message: '',
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
      state.isFetching = true;
    },
    successLogIn(state: LogState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
      state.isLoggedIn = true;
      state.isLoggedOut = false;
    },
    failLogIn(state: LogState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isFail = true;
      state.isLoggedIn = false;
    },
    requestLogOut(state: LogState, action) {
      state.isFetching = true;
    },
    successLogOut(state: LogState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
      state.isLoggedIn = false;
      state.isLoggedOut = true;
    },
    failLogOut(state: LogState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isFail = true;
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
