import { createSlice } from '@reduxjs/toolkit';

export const initialState: SignState = {
  id: '',
  password: '',
  isFetching: false,
  successMessage: '',
  failMessage: ''
};

export interface SignState {
  id: string;
  password: string;
  isFetching: boolean;
  successMessage: string;
  failMessage: string;
}

const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    requestSignIn(state: SignState) {
      state.isFetching = true;
    },
    successSignIn(state, action) {
      state.successMessage = action.payload;
      state.isFetching = false;
    },
    failSignIn(state, action) {
      state.failMessage = action.payload;
      state.isFetching = false;
    }
  }
});

export const { requestSignIn, successSignIn, failSignIn } = signSlice.actions;

export default signSlice.reducer;
