import { createSlice } from '@reduxjs/toolkit';

export interface SignState {
  code?: string;
  message: string;
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  isSignUp?: boolean;
  isSignOut?: boolean;
}

export const initialState: SignState = {
  code: '',
  message: '',
  isFetching: false,
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
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successSignUp(state: SignState, action) {
      state.code = action.payload.code;
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isSignUp = true;
      state.isSignOut = false;
    },
    failSignUp(state: SignState, action) {
      state.code = action.payload.code;
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.isSignUp = false;
      state.isSignOut = false;
    },
    requestSignOut(state: SignState, action) {
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
      state.isSignUp = false;
      state.isSignOut = false;
    },
    successSignOut(state: SignState, action) {
      state.code = action.payload.code;
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.isSignUp = false;
      state.isSignOut = true;
    },
    failSignOut(state: SignState, action) {
      state.code = action.payload.code;
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
