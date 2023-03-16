import { createSlice } from '@reduxjs/toolkit';

export interface CommonState {
  message: string;
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  publicKey?: string;
}

export const initialState: CommonState = {
  message: '',
  isFetching: false,
  isSuccess: false,
  isFail: false,
  publicKey: ''
};

const commonSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    requestPublicKey(state: CommonState): void {
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successPublicKey(state, action): void {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.publicKey = action.payload.publicKey;
    },
    failPublicKey(state, action): void {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.publicKey = '';
    }
  }
});

export const { requestPublicKey, successPublicKey, failPublicKey } =
  commonSlice.actions;

export default commonSlice.reducer;
