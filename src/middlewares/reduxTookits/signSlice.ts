import { createSlice } from '@reduxjs/toolkit';

export const initialState: SignState = {
  isFetching: false,
  message: '',
  isSuccess: false,
  isFail: false
};

export interface SignState {
  isFetching: boolean;
  message: string;
  isSuccess: boolean;
  isFail: boolean;
}

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
    },
    failSignIn(state: SignState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isFail = true;
    }
  }
});

export const { requestSignIn, successSignIn, failSignIn } = signSlice.actions;

export default signSlice.reducer;
