import { createSlice } from '@reduxjs/toolkit';
import { Authority } from 'modules/types';

export interface AuthorityState {
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  authorities?: Array<Authority>;
}

export const initialState: AuthorityState = {
  isFetching: false,
  isSuccess: false,
  isFail: false,
  authorities: []
};

const authoritySlice = createSlice({
  name: 'authority',
  initialState,
  reducers: {
    requestAuthority(state: AuthorityState, action) {
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successAuthority(state: AuthorityState, action) {
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.authorities = action.payload.authorities;
    },
    failAuthority(state: AuthorityState) {
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.authorities = [];
    }
  }
});

export const { requestAuthority, successAuthority, failAuthority } =
  authoritySlice.actions;

export default authoritySlice.reducer;
