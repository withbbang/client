import { createSlice } from '@reduxjs/toolkit';
import { Content } from 'modules/types';
import { CommonState } from './commonSlice';

export interface ContentManageState {
  contents?: Array<Content>;
  content?: Content;
}

export const initialState: ContentManageState = {
  contents: [],
  content: undefined
};

const contentManageSlice = createSlice({
  name: 'contentManage',
  initialState,
  reducers: {
    requestContents(state: ContentManageState, action) {},
    successContents(state: ContentManageState, action) {
      state.contents = action.payload.contents;
    },
    failContents(state: ContentManageState) {
      state.contents = [];
    },
    requestContent(state: ContentManageState, action) {},
    successContent(state: ContentManageState, action) {
      state.content = action.payload.content;
    },
    failContent(state: ContentManageState) {
      state.content = undefined;
    },
    requestCreateContent(state: ContentManageState, action) {},
    successCreateContent(state: ContentManageState, action) {},
    failCreateContent(state: ContentManageState) {},
    requestDeleteRestoreContent(state: ContentManageState, action) {},
    successDeleteRestoreContent(state: ContentManageState, action) {
      state.contents = action.payload.contents;
    },
    failDeleteRestoreContent(state: ContentManageState) {},
    requestUpdateContent(state: ContentManageState, action) {},
    successUpdateContent(state: ContentManageState, action) {},
    failUpdateContent(state: ContentManageState) {}
  }
});

export const {
  requestContents,
  successContents,
  failContents,
  requestContent,
  successContent,
  failContent,
  requestCreateContent,
  successCreateContent,
  failCreateContent,
  requestDeleteRestoreContent,
  successDeleteRestoreContent,
  failDeleteRestoreContent,
  requestUpdateContent,
  successUpdateContent,
  failUpdateContent
} = contentManageSlice.actions;

export const contentManageExtraReducers = {
  'contentManage/requestContents': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'contentManage/successContents': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'contentManage/failContents': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'contentManage/requestContent': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'contentManage/successContent': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'contentManage/failContent': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'contentManage/requestCreateContent': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'contentManage/successCreateContent': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'contentManage/failCreateContent': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'contentManage/requestDeleteRestoreContent': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'contentManage/successDeleteRestoreContent': (
    state: CommonState,
    action: any
  ) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'contentManage/failDeleteRestoreContent': (
    state: CommonState,
    action: any
  ) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'contentManage/requestUpdateContent': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'contentManage/successUpdateContent': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'contentManage/failUpdateContent': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default contentManageSlice.reducer;
