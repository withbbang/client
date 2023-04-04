import { createSlice } from '@reduxjs/toolkit';
import { Authority } from 'modules/types';
import { CommonState } from './commonSlice';

export interface AuthorityState {
  authorities?: Array<Authority>;
}

export const initialState: AuthorityState = {
  authorities: []
};

const authoritySlice = createSlice({
  name: 'authority',
  initialState,
  reducers: {
    requestAuthority(state: AuthorityState, action) {},
    successAuthority(state: AuthorityState, action) {
      state.authorities = action.payload.authorities;
    },
    failAuthority(state: AuthorityState) {
      state.authorities = [];
    }
  }
});

export const { requestAuthority, successAuthority, failAuthority } =
  authoritySlice.actions;

export const authorityExtraReducers = {
  'authority/requestAuthority': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'authority/successAuthority': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'authority/failAuthority': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default authoritySlice.reducer;
