import { createSlice } from '@reduxjs/toolkit';
import { Category } from 'modules/types';

export interface CategoryManageState {
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  categories?: Array<Category>;
}

export const initialState: CategoryManageState = {
  isFetching: false,
  isSuccess: false,
  isFail: false,
  categories: []
};

const categoryManageSlice = createSlice({
  name: 'categoryManage',
  initialState,
  reducers: {
    requestCategory(state: CategoryManageState, action) {
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successCategory(state: CategoryManageState, action) {
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.categories = action.payload.categories;
    },
    failCategory(state: CategoryManageState) {
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.categories = [];
    },
    requestCreateCategory(state: CategoryManageState, action) {
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successCreateCategory(state: CategoryManageState) {
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
    },
    failCreateCategory(state: CategoryManageState) {
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
    },
    requestUpdateCategory(state: CategoryManageState, action) {
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successUpdateCategory(state: CategoryManageState) {
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
    },
    failUpdateCategory(state: CategoryManageState) {
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
    }
  }
});

export const {
  requestCategory,
  successCategory,
  failCategory,
  requestCreateCategory,
  successCreateCategory,
  failCreateCategory,
  requestUpdateCategory,
  successUpdateCategory,
  failUpdateCategory
} = categoryManageSlice.actions;

export default categoryManageSlice.reducer;
