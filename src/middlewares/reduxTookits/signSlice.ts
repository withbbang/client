import { createSlice } from '@reduxjs/toolkit';

export interface SignState {
  isFetching: boolean;
  message: string;
  isSuccess: boolean;
  isFail: boolean;
  isLoggedIn?: boolean;
}

export const initialState: SignState = {
  isFetching: false,
  message: '',
  isSuccess: false,
  isFail: false,
  isLoggedIn: false
};

const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    requestSignIn(state: SignState, action) {
      state.isFetching = true;
    },
    successSignIn(state: SignState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
      state.isLoggedIn = true;
    },
    failSignIn(state: SignState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isFail = true;
      state.isLoggedIn = false;
    },
    requestSignUp(state: SignState, action) {
      state.isFetching = true;
    },
    successSignUp(state: SignState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    failSignUp(state: SignState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isFail = true;
    }
  }
});

export const {
  requestSignIn,
  successSignIn,
  failSignIn,
  requestSignUp,
  successSignUp,
  failSignUp
} = signSlice.actions;

export default signSlice.reducer;
