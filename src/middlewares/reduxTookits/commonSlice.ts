import { createSlice } from '@reduxjs/toolkit';

export interface CommonState {
  isFetching: boolean;
  publicKey: string;
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
    requestKeyPair(state: CommonState): void {
      state.isFetching = true;
    },
    successKeyPair(state, action): void {
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    failKeyPair(state, action): void {
      state.message = action.payload;
      state.isFetching = false;
      state.isFail = true;
    }
  }
});

export const { requestKeyPair, successKeyPair, failKeyPair } =
  commonSlice.actions;

export default commonSlice.reducer;
