import { createSlice } from '@reduxjs/toolkit';
import { Content } from 'modules/types';
import { CommonState } from './commonSlice';

export interface ContentsState {
  contents?: Array<Content>;
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
    }
  }
});

export const { requestContents, successContents, failContents } =
  contentsSlice.actions;

export const contentsExtraReducers = {
  'contents/requestContents': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'contents/successContents': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'contents/failContents': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default contentsSlice.reducer;
