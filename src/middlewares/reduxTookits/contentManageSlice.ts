import { createSlice } from '@reduxjs/toolkit';
import { Content } from 'modules/types';
import { CommonState } from './commonSlice';

export interface ContentManageState {
  contents?: Array<Content>;
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
    }
  }
});

export const { requestContents, successContents, failContents } =
  contentManageSlice.actions;

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
  }
};

export default contentManageSlice.reducer;
