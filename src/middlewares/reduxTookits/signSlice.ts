import { createSlice } from '@reduxjs/toolkit';
import { CommonState } from './commonSlice';

export interface SignState {
  isSignUp?: boolean;
  isSignOut?: boolean;
}

export const initialState: SignState = {
  isSignUp: false,
  isSignOut: false
};

const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    requestSignUp(state: SignState, action) {},
    successSignUp(state: SignState) {
      state.isSignUp = true;
      state.isSignOut = false;
    },
    failSignUp(state: SignState) {
      state.isSignUp = false;
      state.isSignOut = false;
    },
    requestSignOut(state: SignState, action) {
      state.isSignUp = false;
      state.isSignOut = false;
    },
    successSignOut(state: SignState) {
      state.isSignUp = false;
      state.isSignOut = true;
    },
    failSignOut(state: SignState) {
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

export const signExtraReducers = {
  'sign/requestSignUp': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'sign/successSignUp': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'sign/failSignUp': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'sign/requestSignOut': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'sign/successSignOut': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'sign/failSignOut': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default signSlice.reducer;
