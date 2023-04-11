import { createSlice } from '@reduxjs/toolkit';
import { Category } from 'modules/types';
import { authorityExtraReducers } from './authoritySlice';
import { categoryManageExtraReducers } from './categoryManageSlice';
import { contentsExtraReducers } from './contentsSlice';
import { logExtraReducers } from './logSlice';
import { signExtraReducers } from './signSlice';

export interface CommonState {
  code?: string;
  message?: string;
  isFetching?: boolean;
  isSuccess?: boolean;
  isFail?: boolean;
  isNight?: boolean;
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
  isNight: false,
  publicKey: '',
  today: 0,
  total: 0,
  sideBarCategories: []
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    requestPublicKey(state: CommonState): void {
      state.code = '';
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successPublicKey(state: CommonState, action): void {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.publicKey = action.payload.publicKey;
    },
    failPublicKey(state: CommonState, action): void {
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
    requestSideBarCategory(state: CommonState, action) {
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
    },
    handleIsNight(state: CommonState) {
      state.isNight = !state.isNight;
    },
    handleCodeMessage(state: CommonState, action) {
      state.code = action.payload.code;
      state.message = action.payload.message;
    },
    handleAPIStatus(state: CommonState, action) {
      state.isFetching = action.payload.isFetching;
      state.isSuccess = action.payload.isSuccess;
      state.isFail = action.payload.isFail;
    }
  },
  // API 리듀서들 비동기 상태값들 한번에 관리하기 위한 extraReducers 모음
  extraReducers: {
    ...categoryManageExtraReducers,
    ...authorityExtraReducers,
    ...contentsExtraReducers,
    ...logExtraReducers,
    ...signExtraReducers
    // ...add others
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
  failSideBarCategory,
  handleIsNight,
  handleCodeMessage,
  handleAPIStatus
} = commonSlice.actions;

export default commonSlice.reducer;
