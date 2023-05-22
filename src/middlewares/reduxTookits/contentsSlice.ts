import { createSlice } from '@reduxjs/toolkit';
import { Content } from 'modules/types';
import { CommonState } from './commonSlice';

export interface ContentsState {
  contents?: Array<Content>;
  content?: Content;
}

export const initialState: ContentsState = {
  contents: []
};

const contentsSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    requestContents(state: ContentsState, action): void {},
    successContents(state: ContentsState, action): void {
      state.contents = action.payload.contents;
    },
    failContents(state: ContentsState): void {
      state.contents = [];
    },
    requestContent(state: ContentsState, action): void {},
    successContent(state: ContentsState, action): void {
      state.content = action.payload.content;
    },
    failContent(state: ContentsState): void {}
  }
});

export const {
  requestContents,
  successContents,
  failContents,
  requestContent,
  successContent,
  failContent
} = contentsSlice.actions;

export const contentsExtraReducers = {
  'contents/requestContents': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'contents/successContents': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'contents/failContents': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'contents/requestContent': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'contents/successContent': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'contents/failContent': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default contentsSlice.reducer;
