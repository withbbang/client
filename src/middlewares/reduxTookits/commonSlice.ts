import { createSlice } from '@reduxjs/toolkit';

export interface CommonState {
  isFetching: boolean;
  publicKey?: string;
  message: string;
  isSuccess: boolean;
  isFail: boolean;
}

export const initialState: CommonState = {
  isFetching: false,
  publicKey: '',
  message: '',
  isSuccess: false,
  isFail: false
};

const commonSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    requestPublicKey(state: CommonState): void {
      state.isFetching = true;
    },
    successPublicKey(state, action): void {
      state.message = action.payload.message;
      state.publicKey = action.payload.publicKey;
      state.isFetching = false;
      state.isSuccess = true;
    },
    failPublicKey(state, action): void {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isFail = true;
    }
  }
});

export const { requestPublicKey, successPublicKey, failPublicKey } =
  commonSlice.actions;

export default commonSlice.reducer;
