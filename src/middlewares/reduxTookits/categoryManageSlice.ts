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
    requestUpdateCategory(state: CategoryManageState, action) {},
    successUpdateCategory(state: CategoryManageState, action) {
      state.categories = action.payload.categories;
    },
    failUpdateCategory(state: CategoryManageState) {}
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
  requestUpdateCategory,
  successUpdateCategory,
  failUpdateCategory
} = categoryManageSlice.actions;

export const categoryManageExtraReducers = {
  'categoryManage/requestCategory': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'categoryManage/successCategory': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
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
    state.code = '';
    state.message = '';
  },
  'categoryManage/successCreateCategory': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
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
    state.code = '';
    state.message = '';
  },
  'categoryManage/successSingleUpdateCategory': (
    state: CommonState,
    action: any
  ) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
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
  'categoryManage/requestUpdateCategory': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'categoryManage/successUpdateCategory': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'categoryManage/failUpdateCategory': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default categoryManageSlice.reducer;
