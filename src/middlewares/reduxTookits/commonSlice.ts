import { createSlice } from '@reduxjs/toolkit';
import { Category } from 'modules/types';

export interface CommonState {
  code?: string;
  message: string;
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  publicKey?: string;
  today?: number;
  total?: number;
  sideBarCategories?: Array<Category>;
}

export const initialState: CommonState = {
  code: '',
  message: '',
  isFetching: false,
  isSuccess: false,
  isFail: false,
  publicKey: '',
  today: 0,
  total: 0,
  sideBarCategories: []
};

const commonSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    requestPublicKey(state: CommonState): void {
      state.code = '';
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successPublicKey(state, action): void {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.publicKey = action.payload.publicKey;
    },
    failPublicKey(state, action): void {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.publicKey = '';
    },
    requestVisitCount(state: CommonState): void {
      state.code = '';
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successVisitCount(state: CommonState, action): void {
      state.code = action.payload.code;
      state.message = '';
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.today = action.payload.today;
      state.total = action.payload.total;
    },
    failVisitCount(state: CommonState, action): void {
      state.code = action.payload.code;
      state.message = '';
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.today = 0;
      state.total = 0;
    },
    requestSideBarCategory(state: CommonState) {
      state.code = '';
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successSideBarCategory(state: CommonState, action) {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.sideBarCategories = action.payload.categories;
    },
    failSideBarCategory(state: CommonState, action) {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.sideBarCategories = [];
    }
  }
});

export const {
  requestPublicKey,
  successPublicKey,
  failPublicKey,
  requestVisitCount,
  successVisitCount,
  failVisitCount,
  requestSideBarCategory,
  successSideBarCategory,
  failSideBarCategory
} = commonSlice.actions;

export default commonSlice.reducer;
