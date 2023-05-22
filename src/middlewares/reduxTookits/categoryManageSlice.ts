import { createSlice } from '@reduxjs/toolkit';
import { Category } from 'modules/types';
import { CommonState } from './commonSlice';

export interface CategoryManageState {
  categories?: Array<Category>;
}

export const initialState: CategoryManageState = {
  categories: []
};

const categoryManageSlice = createSlice({
  name: 'categoryManage',
  initialState,
  reducers: {
    requestCategory(state: CategoryManageState, action) {},
    successCategory(state: CategoryManageState, action) {
      state.categories = action.payload.categories;
    },
    failCategory(state: CategoryManageState) {
      state.categories = [];
    },
    requestCreateCategory(state: CategoryManageState, action) {},
    successCreateCategory(state: CategoryManageState, action) {
      state.categories = action.payload.categories;
    },
    failCreateCategory(state: CategoryManageState) {},
    requestSingleUpdateCategory(state: CategoryManageState, action) {},
    successSingleUpdateCategory(state: CategoryManageState, action) {
      state.categories = action.payload.categories;
    },
    failSingleUpdateCategory(state: CategoryManageState) {},
    requestMultiUpdateCategory(state: CategoryManageState, action) {},
    successMultiUpdateCategory(state: CategoryManageState, action) {
      state.categories = action.payload.categories;
    },
    failMultiUpdateCategory(state: CategoryManageState) {},
    requestDeleteRestoreCategory(state: CategoryManageState, action) {},
    successDeleteRestoreCategory(state: CategoryManageState, action) {
      state.categories = action.payload.categories;
    },
    failDeleteRestoreCategory(state: CategoryManageState) {}
  }
});

export const {
  requestCategory,
  successCategory,
  failCategory,
  requestCreateCategory,
  successCreateCategory,
  failCreateCategory,
  requestSingleUpdateCategory,
  successSingleUpdateCategory,
  failSingleUpdateCategory,
  requestMultiUpdateCategory,
  successMultiUpdateCategory,
  failMultiUpdateCategory,
  requestDeleteRestoreCategory,
  successDeleteRestoreCategory,
  failDeleteRestoreCategory
} = categoryManageSlice.actions;

export const categoryManageExtraReducers = {
  'categoryManage/requestCategory': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'categoryManage/successCategory': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'categoryManage/failCategory': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'categoryManage/requestCreateCategory': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'categoryManage/successCreateCategory': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'categoryManage/failCreateCategory': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'categoryManage/requestSingleUpdateCategory': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'categoryManage/successSingleUpdateCategory': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'categoryManage/failSingleUpdateCategory': (
    state: CommonState,
    action: any
  ) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'categoryManage/requestMultiUpdateCategory': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'categoryManage/successMultiUpdateCategory': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'categoryManage/failMultiUpdateCategory': (
    state: CommonState,
    action: any
  ) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'categoryManage/requestDeleteRestoreCategory': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'categoryManage/successDeleteRestoreCategory': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'categoryManage/failDeleteRestoreCategory': (
    state: CommonState,
    action: any
  ) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default categoryManageSlice.reducer;
