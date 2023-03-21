import { createSlice } from '@reduxjs/toolkit';
import { Category } from 'modules/types';

export interface CategoryManageState {
  message: string;
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  categories: Array<Category>;
}

export const initialState: CategoryManageState = {
  message: '',
  isFetching: false,
  isSuccess: false,
  isFail: false,
  categories: []
};

const categoryManageSlice = createSlice({
  name: 'categoryManage',
  initialState,
  reducers: {
    requestCategory(state: CategoryManageState) {
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successCategory(state: CategoryManageState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.categories = action.payload.categories;
    },
    failCategory(state: CategoryManageState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.categories = [];
    },
    requestCreateCategory(state: CategoryManageState, action) {
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successCreateCategory(state: CategoryManageState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
    },
    failCreateCategory(state: CategoryManageState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
    },
    requestUpdateCategory(state: CategoryManageState, action) {
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successUpdateCategory(state: CategoryManageState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
    },
    failUpdateCategory(state: CategoryManageState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
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
