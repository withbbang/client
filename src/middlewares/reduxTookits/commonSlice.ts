import { createSlice } from '@reduxjs/toolkit';

export interface CommonState {
  isFetching: boolean;
  publicKey: string;
  successMsg: string;
  failMsg: string;
}

export const initialState: CommonState = {
  isFetching: false,
  publicKey: '',
  successMsg: '',
  failMsg: ''
};

const commonSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    requestKeyPair(state: CommonState): void {
      state.isFetching = true;
    },
    successKeyPair(state, action): void {
      state.successMsg = action.payload;
      state.isFetching = false;
    },
    failKeyPair(state, action): void {
      state.failMsg = action.payload;
      state.isFetching = false;
    }
  }
});

export const { requestKeyPair, successKeyPair, failKeyPair } =
  commonSlice.actions;

export default commonSlice.reducer;
