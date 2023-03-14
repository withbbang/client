import { createSlice } from '@reduxjs/toolkit';

export interface SignState {
  isFetching: boolean;
  message: string;
  isSuccess: boolean;
  isFail: boolean;
  isSignUp?: boolean;
  isSignOut?: boolean;
}

export const initialState: SignState = {
  isFetching: false,
  message: '',
  isSuccess: false,
  isFail: false,
  isSignUp: false,
  isSignOut: false
};

const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    requestSignUp(state: SignState, action) {
      state.isFetching = true;
    },
    successSignUp(state: SignState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isSignUp = true;
      state.isSignOut = false;
    },
    failSignUp(state: SignState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.isSignUp = false;
      state.isSignOut = false;
    },
    requestSignOut(state: SignState, action) {
      state.isFetching = true;
    },
    successSignOut(state: SignState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isSignUp = false;
      state.isSignOut = true;
    },
    failSignOut(state: SignState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.isSignUp = false;
      state.isSignOut = false;
    }
  }
});

export const {
  requestSignUp,
  successSignUp,
  failSignUp,
  requestSignOut,
  successSignOut,
  failSignOut
} = signSlice.actions;

export default signSlice.reducer;
