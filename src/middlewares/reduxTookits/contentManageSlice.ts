import { createSlice } from '@reduxjs/toolkit';
import { Content } from 'modules/types';
import { CommonState } from './commonSlice';

export interface ContentManageState {
  contents?: Array<Content>;
  content?: Content;
}

export const initialState: ContentManageState = {
  contents: []
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
      state.contents = [];
    }
  }
});

export const {
  requestContents,
  successContents,
  failContents,
  requestContent,
  successContent,
  failContent
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
  }
};

export default contentManageSlice.reducer;
